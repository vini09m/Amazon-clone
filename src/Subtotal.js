import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
//import { useState } from 'react';
//import { getTotalPrice } from './Reducer';
import {useNavigate} from 'react-router-dom'

function Subtotal() {
  const [{basket},dispatch] = useStateValue();
const history =useNavigate();

 
  const result = basket?.reduce((total, item) => total = total + item.price,0);
  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
                <>
                  <p>
                    {/* Part of the homework -----complete*/}
                    Subtotal ({basket?.length} items): <strong>{value}</strong>
                  </p>
                  <small className='subtotal__gift'>
                    <input type='checkbox' /> This order contains a gift
                  </small>
                </>
            )}
            decimalScale={2}
            value={result}//part of hw
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
        />
        <button onClick={e => history('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal 