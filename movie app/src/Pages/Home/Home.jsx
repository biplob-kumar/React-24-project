import React, { useEffect, useState } from 'react'
import home from "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import MovieList from '../../Components/movieList/MovieList';

const Home = () => {
  const [ popularMovies, setPopularMovies ] = useState([])
    useEffect(()=>{
     fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
     .then(res=>res.json())
     .then(data=> setPopularMovies(data.results))
    },[])

  return (
    <>

<div className='poster'>

      <Carousel
           showThumbs={false}
           autoPlay={true}
           transitionTime={3}
           infiniteLoop={true}
           showStatus={false}
           >
           {
            popularMovies.map(movie=>(
              <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
              <div className='poster-img'>
               <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
              </div>

                <div className='posterImg-overlay'>
                <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                <div className="posterImage__runtime">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage__rating">
                      {movie ? movie.vote_average :""}
                      <i class="fa-solid fa-star"></i>{" "}
                  </span>
              </div>
              <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                </div>
                </Link>
            ))
           }

      </Carousel>
      <MovieList/>
</div>
    </>

  )
}

export default Home