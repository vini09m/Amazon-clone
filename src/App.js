import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment'
import 'bootstrap/dist/css/bootstrap.min.css';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import PageNotFound from './PageNotFound'
import Orders from './Orders';

const promise=loadStripe("pk_test_51LJhl1SGvExgRQQCYMlAeWwOQA18B7jV8O1b7Niv7Yc4rlZrtrzZhrZz2Xf7cR7xnlPaHoxX6W0JCi5rybAcQIwQ00MHeSoACR");

function App() {

  const [{},dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>>> ',authUser);
      
      if(authUser){
          dispatch({
            type:"SET_USER",
            user:authUser
          })
      }
      else{
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
  },[])
  return (
    //BEM
    <Router>
      <div className="app">
       
        <Routes>
        <Route path="/orders" element={ <><Header /><Orders /></> }/>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/checkout" element={ <><Header /><Checkout /></> }/>
        <Route path="/payment" element=
          { 
          <>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            
          </> 
          }
        />
        <Route path="/" element={<> <Header /><Home/></> } />
          
        </Routes>
              
        
    </div>
    </Router>
    
  );
}

export default App;
/**/