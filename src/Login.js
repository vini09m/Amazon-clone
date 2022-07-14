import React,{useState} from 'react'
import './Login.css'
import {Link,useNavigate} from 'react-router-dom'
import {auth} from './firebase'

function Login() {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const history =useNavigate();

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((auth) => {
            if(auth){
                history('/');
            }
        }).catch(error => alert(error.message));
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((auth) => {
            if(auth){
                history('/');
            }
        }).catch(error => alert(error.message));
    }

  return (
    <div className='login'>
        <Link to='/'>
            <img
                className='login__logo'
                src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG'
                alt=""
            />
        </Link>
        <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input 
                    type='text'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <h5>Password</h5>
                <input 
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <button type='submit' onClick={signIn}className='login__signInButton'>Sign In</button>
            </form>
            <p>
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login