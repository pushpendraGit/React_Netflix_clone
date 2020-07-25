import React, { useState, useEffect } from "react";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import axios from "./axios";
import './Row.css'
const base_url = "https://image.tmdb.org/t/p/original/";


function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  // console.log("This is i am getting", fetchUrl);

  //A snopet of code which runs on spesific condition

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      // console.log('mivies', request.data.results)

      setMovies(request.data.results);
    }

    fetchData();
  }, [fetchUrl]);

  // console.log("Your all movies is", movies);


  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if(trailerUrl){
      setTrailerUrl("");
    }else{

      movieTrailer(movie?.name || "")
      .then(url => {

        const urlParams = new URLSearchParams(new URL(url).search);

       setTrailerUrl(urlParams.get('v'));

      }).catch(error => console.log(error))
    }


  }

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/* several row poster */}

        {movies.map((movie) => (
          <img
          onClick={() => handleClick(movie)}
          key={movie.id}
           src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
           alt={movie.name} className={`row__poster ${isLargeRow && "row__posterLarge"}`}/>
        ))}
      </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }
    </div>
  );
}

export default Row;
