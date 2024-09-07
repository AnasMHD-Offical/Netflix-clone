import React, { useState, useEffect } from "react";
import Style from "./Hero.module.css";
import Requests from "../../Request/Request";
import axios from "../../Request/Axios";
function Hero() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchDta() {
      const request = await axios.get(Requests.fetchComedyMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchDta();
  }, []);
  return (
    <>
      <header
        className={Style.Hero}
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original${ movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className={Style.Hero_content}>
          {/* The title of the Movie is appear here */}
          <h1 className={Style.Hero_title}>{movie?.name || movie?.title}</h1>
          {/* The 2 buttons in the  Hero banner */}
          <div className={Style.Hero_btns}>
            <button className={Style.Hero_btn}>Play</button>
            <button className={Style.Hero_btn}>My List</button>
          </div>
          <h3 className={Style.Hero_description}>{movie.overview}</h3>
        </div>
        <div className={Style.Hero_fadeBottom}>

        </div>
      </header>
    </>
  );
}

export default Hero;
