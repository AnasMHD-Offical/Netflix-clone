import React , { useState , useEffect} from 'react'
import Style from "./Hero.module.css"
import Requests from '../../Request/Request'
import axios from "../../Request/Axios"
function Hero() {
    const [ movie , setMovie ] = useState([])

    useEffect(()=>{
        async function fetchDta() {
            const request = await axios.get(Requests.fetchTrending)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request
            
        }
        fetchDta()
    },[])
    return (
      <>
      <header>
        <div className="banner-content">

            <h1>{movie.name || movie.title}</h1>
        </div>
      </header>
      </>
    )
}

export default Hero