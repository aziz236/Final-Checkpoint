import React, { useState,setState} from "react";
import { FaStar } from "react-icons/fa"
import './AMScss.css'
import AMSmodel from './AMSmodel'
import AddButton from '../images/AddButton2.png' 

/* Main Function */
function RootComponent() {
/*****************/
const MovieInfos = [
    {name:"-FRIENDS-",
      rating: 4,
      description:" Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
    image:"https://i.imgur.com/AfryWob.jpg",video:"https://www.youtube.com/embed/hDNNmeeJs1Q"},
    
    {name:"-THE HUNDRED-",
      rating: 3.9,
      description:"Set ninety-seven years after a nuclear war has destroyed civilization, when a spaceship housing humanity's lone survivors sends one hundred kids back to Earth, in hopes of saving humanity.",
    image:"https://i.imgur.com/48FK7zK.png",video:"https://www.youtube.com/embed/ia1Fbg96vL0"},
    
    {name:"-GAME OF THRONES-",
      rating: 5,
      description:"Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    image:"https://cdn10.bigcommerce.com/s-vzuks4/products/792/images/3991/Game_of_Thrones_1__51224.1518920212.1280.1280.jpg?c=2",video:"https://www.youtube.com/embed/gcTkNV5Vg1E"},
    {name:"-PRISON BREAK-",
      rating: 4,
      description:" Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who deliberately sent himself to the same prison in order to break the both of them out, from the inside.",
    image:"https://fr.web.img5.acsta.net/pictures/17/05/22/16/49/588696.jpg",video:"https://www.youtube.com/embed/AL9zLctDJaU"},
      
    {name:"-THE WALKING DEAD-",
      rating: 4,
      description:"Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.",
    image:"https://m.media-amazon.com/images/M/MV5BYTUwOTM3ZGUtMDZiNy00M2I3LWI1ZWEtYzhhNGMyZjI3MjBmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",video:"https://www.youtube.com/embed/R1v0uFms68U"},
    
    {name:"-STRANGER THINGS-",
      rating: 4,
      description:"When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
    image:"https://i.pinimg.com/originals/a5/5c/cc/a55ccc161959d40afcf36966bcce8886.jpg",video:"https://www.youtube.com/embed/b9EkMc79ZSU"},
    {name:"-VIKINGS-",
      rating: 4,
      description:"Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.",
    image:"https://i.pinimg.com/originals/d0/43/67/d043675e4e9895de3613733f046e3234.jpg",video:"https://www.youtube.com/embed/f5av6OqFwz0"},
    
    {name:"-BREAKING BAD-",
      rating: 5,
      description:"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    image:"https://taxprof.typepad.com/.a/6a00d8341c4eab53ef01b8d25ba5a1970c-800wi",video:"https://www.youtube.com/embed/HhesaQXLuRY"},
    
    {name:"-LOST-",
      rating: 4,
      description:"The survivors of a plane crash are forced to work together in order to survive on a seemingly deserted tropical island.",
    image:"https://www.alliphonewallpapers.com/images/wallpapers/640/jbm3cspct.jpg",video:"https://www.youtube.com/embed/KTu8iDynwNc"},
    
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
          <p> Rating:<input className="write-your-input" type="text" placeholder="Movie Rating(1 -> 5)" value={movieRating} required onChange={(props)=> setMovieRating(props.target.value)}/></p>
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