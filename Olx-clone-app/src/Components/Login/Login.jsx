import React ,{useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import {signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "../../Firebase"
import "./Login.css" 
import Navbar from '../Navbar/Navbar'
const Context = React.createContext()
function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error , setError] = useState("")
  const [userLogined , setUserLogined] = useState("")
  const navigate = useNavigate()
  const display = false
  
  const handleLogin = async (e) =>{

        //Prevent the default browser settings
        e.preventDefault()

       try {
          const isUserExist = await signInWithEmailAndPassword(auth , email , password)
          console.log(isUserExist);
          
          if(isUserExist){
            navigate("/")
            setUserLogined(true)
        }else{
          console.log("errror");      
        }
       } catch (error) {
          setError("Invalid email or password")
          console.log(error.message);
          
       }
  }
  return (
    <div className="Login-body">
        <div className='Login-container'>
            <div className='Login-olx-logo'>
                <img src="https://static.olx.ua/static/olxua/packed/font/2f245edf8d709c906bd6c4b03d1623d647.svg" alt="" />
            </div>
            <h1 className='Login-Header'>Login</h1>
            <form className='Login-form' action="" onSubmit={handleLogin}>
                <input className='Login-email' type="text" placeholder='Email' name='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <input className='Login-password' type="password" placeholder='password' name='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button className='Login-submit' type='submit' >Login</button>
                <p className='login-error'>{error}</p>
                <Link className='Go-Sumbit' to={"/signup"}>Create new Account</Link>
            </form>
        </div>
            <button className='backtohome' onClick={()=>navigate("/")}>Back to Home</button>
        <Context.Provider value={userLogined}>
           {display && < Navbar/>}
        </Context.Provider>
    </div>
  )
}

export default Login

export {
  Context
}