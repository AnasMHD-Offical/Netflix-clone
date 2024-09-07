import React from 'react'
import Style from "./Footer.module.css"

function Footer() {
  return (
    <>
    <footer className={Style.footer}>
        <ul className={Style.social_logo_container}>
            <li className={Style.social_logo}><i className='bx bxl-facebook'></i></li>
            <li className={Style.social_logo}><i className='bx bxl-instagram' ></i></li>
            <li className={Style.social_logo}><i className='bx bxl-twitter'></i></li>
            <li className={Style.social_logo}><i className='bx bxl-youtube'></i></li>
        </ul>
        <div className={Style.Footer_list_container}>
            <ul className={Style.footer_List}>
                <li className={Style.footer_Link}>Audio Description</li>
                <li className={Style.footer_Link}>Investor Relations</li>
                <li className={Style.footer_Link}>Legal Notices</li>
            </ul>
            <ul className={Style.footer_List}>
                <li className={Style.footer_Link}>Help Center</li>
                <li className={Style.footer_Link}>Jobs</li>
                <li className={Style.footer_Link}>Cookies Preferences</li>
            </ul>
            <ul className={Style.footer_List}>
                <li className={Style.footer_Link}>Gift Cards</li>
                <li className={Style.footer_Link}>Terms of Use</li>
                <li className={Style.footer_Link}>Corporate Information</li>
            </ul>
            <ul className={Style.footer_List}>
                <li className={Style.footer_Link}>Media Centre</li>
                <li className={Style.footer_Link}>Privacy</li>
                <li className={Style.footer_Link}>Contact Us</li>
            </ul>
        </div>
        <div>
            <button className={Style.Footer_btn}>Service Code</button>
        </div>
            
        <p className={Style.Footer_Copy}>&copy; 1997-2023 Netflix, Inc. </p>
    </footer>
    </>
  )
}

export default Footer