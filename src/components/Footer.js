import React from 'react'
import './FooterCss.css'
import GmailIcon from '../images/gmail-footer-icon.png'
import PhoneIcon from '../images/phone-icon2.png'

function Footer() {
    return (
        
                <footer className="footer">

<div className="side-informatons">
    <div className="side-icons">
        <img className="side-footer-control" src={PhoneIcon} alt="phone-icon"/>

    </div>
    <div className="phone-number">+216 99056970</div>
    <div className="side-icons2">
        <img className="side-footer-control2" src={GmailIcon} alt="gmail-icon"/>
    </div>
    <div className="phone-number">filmhouse.0@gmail.com</div>
</div>

<div className="contact-us">
    <b>Contact us </b>
</div>
<div className="social-icons-parent">
    <ul className="row">
        <li className="social-icons-li">
            <a href="https://www.facebook.com/profile.php?id=100006314118480">
                <img className="social-icons" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-128.png"/>
            </a>
        </li>
        <li className="social-icons-li">
            <a href="https://twitter.com/filmhouse8">
                <img className="social-icons" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-128.png"/>
            </a>
        </li>
        <li className="social-icons-li">
            <a href="https://www.instagram.com/azizbounhas/">
                <img className="social-icons" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/instagram_online_social_media_photo-128.png"/>
            </a>
        </li>
        <li className="social-icons-li">
            <a href="https://mail.google.com/mail/u/0/#inbox">
                <img className="social-icons" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_google_plus-128.png"/>
            </a>
        </li>
    </ul>
</div>
    <p className="copyright"> &copy; Copyright 2020-2021. All rights reserved </p>
</footer>
        
    )
}
export default Footer;