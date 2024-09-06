import React, { useState, useEffect } from "react";
import Style from "./Card.module.css";
// import Requests from "../../Request/Request";
import axios from "../../Request/Axios";

function Card({ title , fetchUrl , IsLargeRow }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className={Style.Row}>
      <h2>{title}</h2>
      <div className={Style.row_poster}>
        {movies.map((movie) => (
          <img
            className={  IsLargeRow ? Style.Row_poster_container : Style.Row_posterLarge }
            key={movie.id}
            src={`${base_url}${IsLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
            alt={movie.name || movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Card;
