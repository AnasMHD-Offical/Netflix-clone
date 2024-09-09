import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import "./Signup.css"
function Signup() {
  const navigate = useNavigate()
  return (
    <>
        <div className="Signup-body">
        <div className='Signup-container'>
            <div className='Signup-olx-logo'>
                <img src="https://static.olx.ua/static/olxua/packed/font/2f245edf8d709c906bd6c4b03d1623d647.svg" alt="" />
            </div>
            <h1 className='Signup-Header'>Signup</h1>
            <form className='Signup-form' action="">
                <input className='Signup-email' type="text" placeholder='Name'/>
                <input className='Signup-email' type="email" placeholder='Email'/>
                <input className='Signup-password' type="password" placeholder='password' />
                <button className='Signup-submit'>Sign Up</button>
                <p className='Go-Sumbit'>Already have an account? <Link to={"/login"} className='Go-login'>Login</Link></p>
            </form>
        </div>
        <button className='backtohome' onClick={()=>navigate("/")}>Back to Home</button>
    </div>
    </>
  )
}

export default Signup