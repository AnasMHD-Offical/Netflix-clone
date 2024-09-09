import React from 'react'
import {Link} from "react-router-dom"
import "./Footer.css"
function Footer() {
  return (
    <>
    <div className='footer-container-upper'>
            <ul className='footer-list'>
                <li><Link className="footer-link-h2">POPULAR LOCATIONS</Link></li>
                <li><Link className="footer-link">Kolkata</Link></li>
                <li><Link className="footer-link">Mumbai</Link></li>
                <li><Link className="footer-link">Chennai</Link></li>
                <li><Link className="footer-link">Pune</Link></li>
            </ul>
            <ul className='footer-list'>
                <li><Link className="footer-link-h2">TRENDING LOCATIONS</Link></li>
                <li><Link className="footer-link">Bhubaneshwar</Link></li>
                <li><Link className="footer-link">Hyderabad</Link></li>
                <li><Link className="footer-link">Chandigarh</Link></li>
                <li><Link className="footer-link">Nashik</Link></li>
            </ul>
            <ul className='footer-list'>
                <li><Link className="footer-link-h2">ABOUT US</Link></li>
                <li><Link className="footer-link">Tech@OLX</Link></li>
            </ul>
            <ul className='footer-list'>
            <li><Link className="footer-link-h2">OLX</Link></li>
                <li><Link className="footer-link">Blog</Link></li>
                <li><Link className="footer-link">Help</Link></li>
                <li><Link className="footer-link">Sitemap</Link></li>
                <li><Link className="footer-link">Legal & Privacy information</Link></li>
                <li><Link className="footer-link">Vulnerability Disclosure Program</Link></li>
            </ul>
            <ul className='footer-list-social'>
                <li><Link className="footer-link-social-h">FOLLOW US</Link></li>
                <div className='footer-social'>
                    <li><Link className="footer-link-social-icon"><i className='bx bxl-facebook' ></i></Link></li>
                    <li><Link className="footer-link-social-icon"><i class='bx bxl-instagram' ></i></Link></li>
                    <li><Link className="footer-link-social-icon"><i class='bx bxl-twitter' ></i></Link></li>
                    <li><Link className="footer-link-social-icon"><i class='bx bxl-youtube'></i></Link></li>
                </div>
            </ul>
    </div>
    <div className='footer-container-lower'> 
        <div className='company-conatiner'>
            <div className='company-img-main'>
                <img src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade_tech.svg?v=1" alt="" />
            </div>
            <hr className='divider'/>
            <div className='company-img'>
                <img src="https://statics.olx.in/external/base/img/cartrade/logo/olx.svg?v=1" alt="" />
            </div>
            <div className='company-img'>
                <img src="https://statics.olx.in/external/base/img/cartrade/logo/carwale.svg?v=1" alt="" />
            </div>
            <div className='company-img'>
                <img src="https://statics.olx.in/external/base/img/cartrade/logo/bikewale.svg?v=1" alt="" />
            </div>
            <div className='company-img'>
                <img src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade.svg?v=1" alt="" />
            </div>
            <div className='company-img'>
                <img src="https://statics.olx.in/external/base/img/cartrade/logo/mobility.svg?v=1" alt="" />
            </div>
        </div>
        <div className='copy-conatiner'>
            <p className='copy-help'>Help-Sitemap</p>
            <p className='copy-help'>All rights reserved © 2006-2024 OLX</p>
        </div>
    </div>
    </>
  )
}

export default Footer