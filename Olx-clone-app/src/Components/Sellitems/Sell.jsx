import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Sell.css"
function Sell() {
  return (
    <div>
        <Navbar/>
        <div className="Sell-body">
        <div className='Sell-container'>
            <div className='Sell-olx-logo'>
                <img src="https://static.olx.ua/static/olxua/packed/font/2f245edf8d709c906bd6c4b03d1623d647.svg" alt="" />
            </div>
            <h1 className='Sell-Header'>Sell Items</h1>
            <form className='Sell-form' action="">
                <input className='Sell-name' type="text" placeholder='Product name'/>
                <input className='Sell-category' type="text" placeholder='Category'/>
                <input className='Sell-price' type="password" placeholder='Price' />
                <label htmlFor="sell-img">Product Image</label>
                <label class="file">
                    <input type="file" id="file" aria-label="File browser example"/>
                    <span class="file-custom"></span>
                </label>
                <button className='Sell-submit'>Sell Item</button>
                {/* <p className='Go-Sumbit'>Already have an account? <Link to={"/login"} className='Go-login'>Login</Link></p> */}
            </form>
        </div>
    </div>
    </div>
  )
}

export default Sell