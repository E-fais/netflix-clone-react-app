import {useEffect,useState} from 'react'
import React from 'react'
import axios from '../../axios/axios'
import { apiKey,imageUrl } from '../../constants/constants'
import './banner.css'
import {useNavigate} from 'react-router-dom'
import Youtube from "react-youtube";

function Banner() {
  const navigate=useNavigate()
 const random= Math.floor(Math.random()*20)
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
     
      
      setMovie(response.data.results[random])
    })
  }, [])
  const [urlId, setUrlId] = useState("");
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const showTrailer = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
          console.log(response.data);
        }
      })}
  
  return (

   
    <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:''})`}}
    className="banner">
       {urlId && (
        <div className="cover-image-youtube">
          <Youtube videoId={urlId.key} opts={opts} />
          <div className="btnDiv">
            <button
              className="closeBtn"
              onClick={() => {
                setUrlId("");
              }}
            >
              Close trailer
            </button>
          </div>
        </div>
      )}

      <div className="content">
        <h1 className="title">{movie?movie.title:''}</h1>
        <div className="banner-buttos">
          <button  
          className="button"
          onClick={()=>showTrailer(movie.id)}
          >Play
          </button>
          <button
           className="button"
           onClick={()=>navigate('/mylist')}>
            My List
            </button>
        </div>
        <h1 className="description">{movie?movie.overview:''}</h1>
      </div>
      <div className="fade-bottom"></div>
     
    </div>)
}

export default Banner