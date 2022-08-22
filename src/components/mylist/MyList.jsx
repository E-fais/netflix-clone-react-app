import React, { useState } from "react";
import { useContext } from "react";
import { MovieContext } from "../../context/context";
import { imageUrl, apiKey } from "../../constants/constants";
import Youtube from "react-youtube";
import axios from "../../axios/axios";
import './mylist.css'

function MyList() {
  const { addToMylist, myList, removeFromMylist } = useContext(MovieContext);
  console.log(myList);

  const checkMylist = (id) => {
    const boolean = myList.some((obj) => obj.id === id);
  };
  const showTrailer = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
          console.log(response.data);
        }
      });
  };
  const [urlId, setUrlId] = useState("");
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="container">
      {urlId && (
        <div className="youtube">
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
      {myList.length > 0
        ? myList.map((obj) => {
            return (
              <div className='thumbNail'>
               <div>
                <img
                  onClick={() => showTrailer(obj.id)}
                  className="posterImage-small"
                  src={`${imageUrl + obj.backdrop_path}`}
                  alt="loading images"
                />
                </div>
                <div>
                <p  className="moviedescription">{obj.overview}</p>
                <button
                  className="btn"
                  onClick={() => removeFromMylist(obj.id)}
                >
                  Remove From My List
                </button></div>
              </div>
            );
          })
        : <h1 >My list is empty! </h1>}
    </div>
  );
}

export default MyList;
