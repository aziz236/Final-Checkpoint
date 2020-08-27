import React from 'react'
import './CarousselCss.css'

function Caroussel(props) {
    const carousel=[
        {id:"carousel__slide1",leftSlide:"#carousel__slide3",RightSlide:"#carousel__slide2",NavBtn:"#carousel__slide1",link:"https://www.youtube.com/embed/pdaMBWw8vPY"},
        {id:"carousel__slide2",leftSlide:"#carousel__slide1",RightSlide:"#carousel__slide3",NavBtn:"#carousel__slide2",link:"https://www.youtube.com/embed/f7s09XeEW5A"},
        {id:"carousel__slide3",leftSlide:"#carousel__slide2",RightSlide:"#carousel__slide4",NavBtn:"#carousel__slide3",link:"https://www.youtube.com/embed/3jWkxL0HfiQ"},
        {id:"carousel__slide4",leftSlide:"#carousel__slide3",RightSlide:"#carousel__slide5",NavBtn:"#carousel__slide4",link:"https://www.youtube.com/embed/nHN55BirRSE"},
        {id:"carousel__slide5",leftSlide:"#carousel__slide4",RightSlide:"#carousel__slide6",NavBtn:"#carousel__slide5",link:"https://www.youtube.com/embed/glEtdHJMcow"},
        {id:"carousel__slide6",leftSlide:"#carousel__slide5",RightSlide:"#carousel__slide7",NavBtn:"#carousel__slide6",link:"https://www.youtube.com/embed/7DemM7UGmIg"},
        {id:"carousel__slide7",leftSlide:"#carousel__slide6",RightSlide:"#carousel__slide8",NavBtn:"#carousel__slide7",link:"https://www.youtube.com/embed/hAgoB3hCqUw"},
        {id:"carousel__slide8",leftSlide:"#carousel__slide7",RightSlide:"#carousel__slide9",NavBtn:"#carousel__slide8",link:"https://www.youtube.com/embed/nsAKyOZk_CY"},
        {id:"carousel__slide9",leftSlide:"#carousel__slide8",RightSlide:"#carousel__slide1",NavBtn:"#carousel__slide9",link:"https://www.youtube.com/embed/opRvRJzBWfo"},
    ]
     const NavBtn=[
        {href:"#carousel__slide1"},
        {href:"#carousel__slide2"},
        {href:"#carousel__slide3"},
        {href:"#carousel__slide4"},
        {href:"#carousel__slide5"},
        {href:"#carousel__slide6"},
        {href:"#carousel__slide7"},
        {href:"#carousel__slide8"},
        {href:"#carousel__slide9"},
    ]
    return (
        <div className="Carosel-Layout">

<section class="carousel" aria-label="Gallery">
  <ol class="carousel__viewport">
  {carousel.map(item => (
            <li id={item.id}
        tabindex="0"
        class="carousel__slide">

      <div class="carousel__snapper">

     <iframe src={item.link} height="100%" width="100%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="d-block w-100" frameborder="1"></iframe>

          </div>
        <a href={item.leftSlide}
           class="carousel__prev"></a>
        <a href={item.RightSlide}
           class="carousel__next"></a>
    </li>
         ))}
  </ol>
  <aside class="carousel__navigation">
    <ol class="carousel__navigation-list">
    {NavBtn.map(item => (
      <li class="carousel__navigation-item">
      <a href={item.href}
         class="carousel__navigation-button"></a>
    </li>
         ))}
    </ol>
  </aside>
</section>
        </div>
    )
}

export default Caroussel
