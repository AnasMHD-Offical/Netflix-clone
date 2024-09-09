import React from 'react'
import "./Login.css" 
import {Link, useNavigate} from "react-router-dom"
function Login() {
  const navigate = useNavigate()
  return (
    <div className="Login-body">
        <div className='Login-container'>
            <div className='Login-olx-logo'>
                <img src="https://static.olx.ua/static/olxua/packed/font/2f245edf8d709c906bd6c4b03d1623d647.svg" alt="" />
            </div>
            <h1 className='Login-Header'>Login</h1>
            <form className='Login-form' action="">
                <input className='Login-email' type="text" placeholder='Email'/>
                <input className='Login-password' type="password" placeholder='password' />
                <button className='Login-submit'>Login</button>
                <Link className='Go-Sumbit' to={"/signup"}>Create new Account</Link>
            </form>
        </div>
            <button className='backtohome' onClick={()=>navigate("/")}>Back to Home</button>
    </div>
  )
}

export default Login