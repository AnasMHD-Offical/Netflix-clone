import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input1,setInput1] = useState("")
  const [input2,setInput2] = useState("")

  function handleClick(){
    if(input1 === input2){
      alert("Same input")
    }else{
      alert("different")
    }
  }
  return (
   <>
   
    <input type="text" value={input1} onChange={(e)=>setInput1(e.target.value)} />
    <input type="text" value={input2} onChange={(e)=>setInput2(e.target.value)} />
    <button onClick={handleClick}>Check</button>

   </>
  )
}

export default App
