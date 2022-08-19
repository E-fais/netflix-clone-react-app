import {useEffect,useState} from 'react'
import React from 'react'
import axios from '../../axios/axios'
import { apiKey,imageUrl } from '../../constants/constants'
import './banner.css'
function Banner() {
 const random= Math.floor(Math.random()*20)
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
     
      
      setMovie(response.data.results[random])
    })
  }, [])
  
  return (

   
    <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:''})`}}
    className="banner">

      <div className="content">
        <h1 className="title">{movie?movie.title:''}</h1>
        <div className="banner-buttos">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie?movie.overview:''}</h1>
      </div>
      <div className="fade-bottom"></div>

    </div>)
}

export default Banner