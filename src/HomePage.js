import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'
import Welcome from './images/welcome.png'
import StartWatching from './images/StartWatching.png'
import SeriePic from './images/series pic.png'
import MoviePic from './images/films pic.png'
import AnimePic from './images/Anime pic.png'

function HomePage() {
    return (
    <div>   
    <br/>
    <br/>
    <div class="welcome">
        <p><img src={Welcome} alt="Welcome"/></p>
        <p><img class="start-watching" src={StartWatching} alt="Start Watching?" /></p>
    </div>
        <div className="watch-buttons">
        <Link to='/MovieSection'> <img src={MoviePic}/>   </Link>
        <Link to='/SerieSection'><img src={SeriePic}/>  </Link>
        <Link to='/AnimeSection'> <img src={AnimePic}/>   </Link>
        </div>
        </div>
    )
}
export default HomePage;
