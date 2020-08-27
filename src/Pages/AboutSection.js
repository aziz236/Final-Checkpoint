import React from 'react'
import './AboutCss.css'
import MyPicture from '../images/my picture.png'
function AboutSection() {
    return (
        <div>

        <section className="our-webcoderskull padding-lg">
        <div className="container">
        <div className="row heading heading-icon">
            <h2>Our Team</h2>
        </div>
        <ul className="row">
        <li className="themainbox">
        <div className="cnt-block equal-hight">
            <figure><img src={MyPicture} className="img-responsive" alt=""/></figure>
            <h3>Aziz Bounhas</h3>
            <p>Freelance Web Developer</p>
            <a href="https://www.facebook.com/profile.php?id=100006314118480" className="personal-social-media-url">
            <img className="personal-social-media" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-128.png" alt="facebook"/>
            </a>
            <a href="https://twitter.com/aziz_bounhas" className="personal-social-media-url">
            <img className="personal-social-media" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-128.png" alt="twitter"/>
            </a>
            <a href="https://www.instagram.com/azizbounhas/" className="personal-social-media-url">
            <img className="personal-social-media" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/instagram_online_social_media_photo-128.png" alt="instagram"/>
            </a>

        </div>
        </li>
        </ul>
        </div>
        </section>
     </div>
    )
}

export default AboutSection;
