import React from 'react'
import './NewsCss.css'
import Caroussel from '../components/Caroussel' 
import Hello from '../images/HELLO.png'
import Well from '../images/WELL.png'
import PerfectPlace from '../images/PerfectPlace.png'
import ToKnowMore from '../images/TO KNOW MORE.png'

function NewsSection() {
    return (
        <div>
        <div class="news">
        <div class="item-1">
        
            <p><img height="65px" src={Hello} alt="Hello"/></p>
            <p><img height="50px" src={Well} alt="Well !!"/></p>
            <p><img height="42px" src={PerfectPlace} alt="This is the perfect place"/></p>
            <p><img height="42px" src={ToKnowMore} alt="To know more about your favorite celebrity"/></p>
        
        </div>
        </div>
        <Caroussel/>
        </div>
    )
}

export default NewsSection
