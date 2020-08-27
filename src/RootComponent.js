import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import MovieSection from './Pages/MovieSection'
import SerieSection from './Pages/SerieSection'
import AnimeSection from './Pages/AnimeSection'
import LoginSection from './Pages/LoginSection'
import AboutSection from './Pages/AboutSection'
import NewsSection from './Pages/NewsSection'
import HomePage from './HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function MainPage() {
    return (
        <div>
            
            <Router>
        <div>
        <Navbar/>
        <Switch>
          <div className="components">
        <Route path="/" exact component={HomePage}/>
        <Route path="/LoginSection" exact component={LoginSection}/>
        <Route path="/NewsSection" component={NewsSection}/>
        <Route path="/AboutSection" component={AboutSection}/>
        <Route path="/MovieSection" component={MovieSection}/>
        <Route path="/SerieSection" component={SerieSection}/>
        <Route path="/AnimeSection" component={AnimeSection}/>
        </div>
        </Switch>
        </div>
        </Router>
            <Footer/>
        </div>
    )
}
export default MainPage;



