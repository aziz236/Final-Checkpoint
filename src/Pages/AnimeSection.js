import React, { useState,setState} from "react";
import { FaStar } from "react-icons/fa"
import './AMScss.css'
import AMSmodel from './AMSmodel'
import AddButton from '../images/AddButton2.png' 

/* Main Function */
function RootComponent() {
/*****************/
const MovieInfos = [
    {name:"-TOKYO GHOUL-",
      rating: 3.8,
      description:"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    image:"https://cdn.myanimelist.net/images/anime/5/64449.jpg",video:"https://www.youtube.com/embed/whsQGujTLq0"},
    
    {name:"-MY HERO ACADEMY-",
      rating: 3.5,
      description:"A superhero-loving boy without any powers is determined to enroll in a prestigious hero academy and learn what it really means to be a hero.",
    image:"https://cdn.myanimelist.net/images/anime/10/78745.jpg",video:"https://www.youtube.com/embed/EPVkcwyLQQ8"},
    
    {name:"-DEATH NOTE-",
      rating: 5,
      description:"An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
    image:"https://cdn.myanimelist.net/images/anime/9/9453.jpg",video:"https://www.youtube.com/embed/tJZtOrm-WPk"},
    
    {name:"-ATTACK ON TITAN-",
      rating: 4,
      description:" After his hometown is destroyed and his mother is killed, young Eren Yeager vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
    image:"https://cdn.myanimelist.net/images/anime/10/47347.jpg",video:"https://www.youtube.com/embed/6scZ1qj2w38"},
    
    {name:"-ONE PIECE-",
      rating: 4,
      description:"Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named -One Piece-.",
    image:"https://cdn.myanimelist.net/images/anime/6/73245.jpg",video:"https://www.youtube.com/embed/5BIg26BLXXQ"},
    
    {name:"-FULLMETAL ALCHEMIST:BROTHERHOOD-",
      rating: 5,
      description:"Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
    image:"https://cdn.myanimelist.net/images/anime/1223/96541.jpg",video:"https://www.youtube.com/embed/dqDB6gQLbPM"},
    
    {name:"-ONE PUNCH MAN-",
      rating: 4,
      description:"The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch.",
    image:"https://cdn.myanimelist.net/images/anime/12/76049.jpg",video:"https://www.youtube.com/embed/2JAElThbKrI"},
    
    {name:"-NARUTO-",
      rating: 4,
      description:"Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.",
    image:"https://cdn.myanimelist.net/images/anime/13/17405.jpg",video:"https://www.youtube.com/embed/j2hiC9BmJlQ"},
    
    {name:"-SWORDS ART ONLINE-",
      rating: 4,
      description:"In the year 2022, thousands of people get trapped in a new virtual MMORPG and the lone wolf player, Kirito, works to escape.",
    image:"https://cdn.myanimelist.net/images/anime/11/39717.jpg",video:"https://www.youtube.com/embed/nBg_twKBofU"},
    ];
/* The Movies Array */



/*******************************************/


  /*** Search ***/
  const [searchTerm, setSearchTerm] = useState('');
  const [ratingResults, setRatingResults] = useState([]);
  /**************/
  const [rating, setRating] = useState('1');
  const [newMovies, setNewMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [movieRating, setMovieRating] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');

  /* Search By Name */
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
 React.useEffect(() => {
    const searchResult = 
    MovieInfos.filter(movieinfo =>
      movieinfo.name.toLowerCase().includes(searchTerm.toLowerCase().trim()))
      // .map(movie => ({name:movie.name,description:movie.description,image:movie.image,video:movie.video,rating:movie.rating}));
    setRatingResults(searchResult);
  }, [searchTerm]);
  /******************/

  /* Search By Stars */
  const searchchange = event => {
     setRating(event.target.value);
   };
  React.useEffect(() => {
     const results = 
     MovieInfos.filter(movieinfo =>
       movieinfo.rating >= rating)
      // .map(movie => ({name:movie.name,description:movie.description,image:movie.image,video:movie.video,rating:movie.rating}));
      setRatingResults(results);
   }, [rating]);
   /* Add A Movie */
   const addMovie = (title,description) => {
    setNewMovies([...newMovies, 
      { 
      title, id: Math.random(),
      description, id: Math.random(),
      movieRating, id: Math.random(),
      image, id: Math.random(),
      video, id: Math.random()    
        }])
} 
const handleSubmitName = (e) => {
  e.preventDefault();
  
  addMovie(title,description,rating,image,video);
  setTitle('');
  setDescription('');
  setMovieRating('');
  setImage('');
  setVideo('');
}

const [show, setShow] = useState(false);
const openModal = () => setShow(true);
const closeModal = () => setShow(false);

   return (

    <div>

      <div className="info-input">
        {!show && <button className="button-adj" onClick={openModal}><img src={AddButton}/></button>}
      <div className={show ? "modal" : "hide"}>
        <button onClick={closeModal}>X</button>
        <form className="add-movie-inputs" onSubmit={handleSubmitName}  >
          <p> Name:<input className="write-your-input" type="text" placeholder="Movie Name" value={title} required onChange={(props)=> setTitle(props.target.value)}/></p>
          <p> Description:<input className="write-your-input" type="text" placeholder="Movie Description" value={description} required onChange={(props)=> setDescription(props.target.value)}/></p>
          <p> Rating:<input className="write-your-input" type="number" placeholder="Movie Rating(1 -> 5)" value={movieRating} required onChange={(props)=> setMovieRating(props.target.value)}/></p>
          <p>Image:<input className="write-your-input" type="text" placeholder="Movie Image (Image Link)" value={image} required onChange={(props)=> setImage(props.target.value)}/></p>
          <p>Trailer:<input className="write-your-input" type="text" placeholder="Movie Trailer (Video Link)" value={video} required onChange={(props)=> setVideo(props.target.value)}/></p>
           <input  type="submit"></input>
        </form>
      </div>
      </div>

      <div className="input-placement">
     <input
       className="input-adj"
       placeholder="Search..."
         value={searchTerm}
         onChange={handleChange}
       />    
       </div>

       <br/>

       <div className="stars-placement">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label>
                        <input 
                        type="radio" 
                        name="rating" 
                        value={ratingValue}
                        onChange={searchchange}
                        onClick={() => setRating(ratingValue)}
                        />
                        <FaStar
                        className="star"
                        color={ratingValue <= rating ? "yellow" : "gray" }
                        size={50}
                        />
                    </label>
                );            
            })}
        </div>

       <br/>

       <div className="ModalGrid">
          {ratingResults.map(item => (
           <AMSmodel className="movies"
           name={item.name} 
           image={item.image} 
           description={item.description} 
           video={item.video} 
           rating={item.rating}
           />
         ))}
         
         
         {newMovies.map(newMovie => {
                  return (
                    <div className="newMovieS">
                    <AMSmodel 
                    name={newMovie.title} 
                    image={newMovie.image} 
                    description={newMovie.description} 
                    video={newMovie.video} 
                    rating={newMovie.movieRating}
                    keyExtractor={item => item.id}
                    />
                   
                    </div>
                         )})}
                         </div>
         </div>
         
   );
 }
export default RootComponent;