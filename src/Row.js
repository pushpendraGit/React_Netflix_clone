import React, { useState, useEffect } from "react";
import axios from "./axios";
import './Row.css'
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  console.log("This is i am getting", fetchUrl);

  //A snopet of code which runs on spesific condition

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      console.log('mivies', request.data.results)

      setMovies(request.data.results);
    }

    fetchData();
  }, [fetchUrl]);

  console.log("Your all movies is", movies);
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/* several row poster */}

        {movies.map((movie) => (
          <img
          key={movie.id}
           src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
           alt={movie.name} className={`row__poster ${isLargeRow && "row__posterLarge"}`}/>
        ))}
      </div>
    </div>
  );
}

export default Row;
