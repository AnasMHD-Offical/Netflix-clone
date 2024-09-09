import React from "react"
import {BrowserRouter as Router , Route , Routes } from "react-router-dom"
import Home from "./Pages/Home/Home" 
import LoginPage from "./Pages/Login/LoginPage"
import SignupPage from "./Pages/Signup/SignupPage"
import SellItems from "./Pages/SellItems/SellItems"
function App() {

  return (
      <>
          <Router>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/Login" element={<LoginPage/>}></Route>
              <Route path="/signup" element={<SignupPage/>}></Route>
              <Route path="/sellitems" element={<SellItems/>}></Route>
            </Routes>
          </Router>
      </>
  )
}

export default App
