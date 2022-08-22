import React, { useContext, useEffect, useState } from "react";
import axios from "../../axios/axios";
import {imageUrl,apiKey } from "../../constants/constants";
import './Posters.css'
import Youtube from 'react-youtube'
import { MovieContext } from "../../context/context";
import MyList from "../mylist/MyList";
function Posters(props) {
  const [urlId,setUrlId]=useState('')
 const {addToMylist,myList,removeFromMylist}=useContext(MovieContext)
  const showTrailer=(id)=>{
     axios.get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`).then(
     response=> {if(response.data.results.length!==0){
       setUrlId(response.data.results[0])
       console.log(response.data)
     }
   } )
  }

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }}
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
       console.log(response.data);
      });
  }, []);

  const checkMylist=(id)=>{
const boolean=myList.some(obj=>obj.id===id)
  return boolean}
  return (
    <div className="rows">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=> {
         return (<div className="moviesPosters">
        <img onClick={()=>showTrailer(obj.id)} className={props.isSmall? "posterImage-small":'posterImage'} src={`${imageUrl+obj.backdrop_path}`} alt="loading images" />
       {checkMylist(obj.id)?<button 
       className="removeMyListBtn"
       onClick={()=>removeFromMylist(obj.id)}
       >Remove From My List</button>:
        <button className="myListBtn"
        onClick={()=>addToMylist(obj)}
        >Add to My List</button>
       }
        </div>)
        }
       )}
      </div>
      
      
      { urlId &&
       <div className="youtube">
       
      <Youtube videoId={urlId.key} opts={opts} />
      <div className="btnDiv">
       <button 
       className="closeBtn"
       onClick={()=>{setUrlId('')}}>
        Close trailer
        </button>
        </div>
      </div>
      }
      {console.log(urlId)}
    </div>
  );
}

export default Posters;
