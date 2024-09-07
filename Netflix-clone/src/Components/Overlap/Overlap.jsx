import React, { useEffect, useState } from "react";
import axios from "axios";
import Youtube from "react-youtube";
import MovieTrailer from "movie-trailer";
import Style from "./Overlap.module.css";
function Overlap({ request, handle, styleComponent }) {
  const [movieName, setMovieName] = useState(null);
  const [movieId, setMovieId] = useState(null);
  const opts = {
    width: "355",
    height: "206",
    playerVars: {
      autoplay: 1,
    },
  };
  //   console.log(movies.id);

  useEffect(() => {
    function handleTrailer() {
      const Id = request?.name || request?.title;
      setMovieName(Id);
    }

    handleTrailer();
  }, []);

  function handleMargin(e) {
    console.log(e.target.style.display);
  }

  function handlePlay() {
    MovieTrailer(movieName)
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setMovieId(urlParams.get("v"));
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <div
        style={{ marginTop: "30px" }}
        className={Style.Overlap}
        onMouseEnter={() => handle(true)}
        onMouseOver={handlePlay}
      >
        <div className={Style.Overlap_yt}>
          <Youtube
            className={Style.Overlap_yt_play}
            videoId={movieId}
            opts={opts}
          />
        </div>
        <div className={Style.Overlap_content}>
          <div className={Style.Overlap_content_btn_container}>
            <button className={Style.Overlap_content_btn}>
              <i class="bx bx-play"></i>
            </button>
            <button className={Style.Overlap_content_btn}>
              <i class="bx bx-plus"></i>
            </button>
            <button className={Style.Overlap_content_btn}>
              <i class="bx bx-like"></i>
            </button>
          </div>
          <div className={Style.Overlap_content_movie_desc}>
            <div>
              <button className={Style.Overlap_content_movie_certify}>
                U/A +16
              </button>
            </div>
            <p className={Style.Overlap_content_movie_length}> 1h 36m</p>
            <div>
              <button className={Style.Overlap_content_movie_quality}>
                HD
              </button>
            </div>
          </div>
          <p className={Style.Overlap_content_gener}>
            Comedy | Thriller | Drama
          </p>
        </div>
      </div>
    </>
  );
}

export default Overlap;
