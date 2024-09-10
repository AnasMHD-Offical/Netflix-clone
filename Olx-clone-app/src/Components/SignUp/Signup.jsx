import React ,{useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import {createUserWithEmailAndPassword} from "firebase/auth"
import { auth , db } from "../../Firebase"
import { doc , setDoc} from "firebase/firestore"
import "./Signup.css"
function Signup() {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [name, setName] = useState("")
  const [error , setError] = useState("")
  const navigate = useNavigate()

  const handleSignup = async (e) =>{
        //prevent the default usecase of browser
        e.preventDefault()
        // creating a new user using createUserWithEmailAndPassword() in  firebase/auth
        try {
          const userCredentials = await createUserWithEmailAndPassword( auth , email, password)
          const user = userCredentials.user
  
          await setDoc(doc(db, "users" , user.uid),{
            name : name,
            email : user.email
          })
          console.log("User signup with firestore data");
          navigate("/")
        } catch (error) {
          if(error.code === 'auth/email-already-in-use'){
            setError("The user already exist . Please Login or try another one")
            console.log(error.message); 
          }else if(error.code === "auth/weak-password"){
            setError("Password should be at least 6 characters.")
            console.log(error.message); 
          }else{
            console.log(error.message); 
          }
          console.log(error.code); 
        }

        

  }
  return (
    <>
        <div className="Signup-body">
        <div className='Signup-container'>
            <div className='Signup-olx-logo'>
                <img src="https://static.olx.ua/static/olxua/packed/font/2f245edf8d709c906bd6c4b03d1623d647.svg" alt="" />
            </div>
            <h1 className='Signup-Header'>Signup</h1>
            <form className='Signup-form' action="" onSubmit={handleSignup}>
                <input className='Signup-name' type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
                <input className='Signup-email' type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input className='Signup-password' type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button className='Signup-submit' type='submit'>Sign Up</button>
                <p className='signup-error'>{error}</p>
                <p className='Go-Sumbit'>Already have an account? <Link to={"/login"} className='Go-login'>Login</Link></p>
            </form>
        </div>
        <button className='backtohome' onClick={()=>navigate("/")}>Back to Home</button>
    </div>
    </>
  )
}

export default Signup