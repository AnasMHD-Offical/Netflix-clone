import React from 'react'
import "./ads.css"
function Ads() {
  return (
    <div className='Ads-container'>
        <img className='Ads-img' src="https://statics.olx.in/external/base/img/phone-app.png" alt="olx app" />
        <div className='Ads-content-container'>
            <h2 className='Ads-title'>TRY THE OLX APP</h2>
            <p className='Ads-text'>Buy, sell and find about anything using the app on your mobile</p>
        </div>
        <hr className='Ads-divider'/>
        <div className='Ads-promo-container'>
            <h3 className='Ads-promo-text'>GET YOUR APP TODAY</h3>
            <div className='Ads-promo-img-container'>
                <img className='Ads-promo-img' src="https://statics.olx.in/external/base/img/appstore_2x.png" alt="App store" />
                <img className='Ads-promo-img' src="https://statics.olx.in/external/base/img/playstore_2x.png" alt="" />
            </div>
        </div>

    </div>
  )
}

export default Ads