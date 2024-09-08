import React, { useState, useEffect, useRef } from "react";
import Style from "./Card.module.css";
import Youtube from "react-youtube";
import MovieTrailer from "movie-trailer";
import Overlap from "../Overlap/Overlap";
// import Requests from "../../Request/Request";
import axios from "../../Request/Axios";
import movieTrailer from "movie-trailer";

function Card({ title, fetchUrl, IsLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [overlap, setOverLap] = useState(false);
  const [request, setRequest] = useState();
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isClick, setIsClick] = useState(false);
  const refObj = useRef()
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  function handleClick(movie){
        MovieTrailer(movie?.name || movie?.title)
        .then(url=>{
            const urlParams = new URLSearchParams(new URL(url).search)
            setTrailerUrl(urlParams.get('v'))
        }).catch((error)=> console.log(error))
      
      setIsClick(true)
  }
  function handleDoubleClick(){
    setIsClick(false)
  }
  function handleOverlap(data) {
    
    setOverLap(true);
    setRequest(data);
    console.log(refObj.current);
  }
  function removeOverlap(e) {
    setOverLap(false);
    setRequest(null);
  }
  function handleComponentOverlap(data){
    setOverLap(data)
  }
  const opts = {
    width: "100%",
    height: "490",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <div className={Style.Row}>
        <h2>{title}</h2>
        <div className={Style.row_poster}>
          {movies.map((movie) => (
            <>
              <img
                onClick={() => handleClick(movie)}
                onDoubleClick={handleDoubleClick}
                onMouseEnter={() => handleOverlap(movie)}
                onMouseLeave={removeOverlap}
                className={
                  IsLargeRow
                    ? Style.Row_poster_container
                    : Style.Row_posterLarge
                }
                key={movie.id}
                src={`${base_url}${
                  IsLargeRow ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt={movie.name || movie.title}
              />
            </>
          ))}
          {overlap && <Overlap request={request} handle={handleComponentOverlap}/>}
        </div>
      </div>
      {isClick && <Youtube videoId={trailerUrl} opts={opts} />}
    </>
  );
}

export default Card;