/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import './css/login.css'
function login() {
  const [hide , sethide]=useState('show')
  const [swap,serswap]=useState("sign up")
  return (
    <div className='loginSignup'>
<div className='loginsingnup-contenar'>
  <h1>{swap}</h1>
  <form action="">
    <input className={hide} type="text" placeholder='Your Name' />
    <input type="email" placeholder='Email' />
    <input type="password" placeholder='Password' />
    <input className='submit' type="submit"/>
  </form>
</div>
<p className={hide}>If you have an account <span onClick={()=>{sethide('hide');
serswap("log in")
 }}>log in</span></p>
    </div>
  )
}

export default login