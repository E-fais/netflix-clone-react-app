import React, { Fragment, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import './App.css'
import MyList from "./components/mylist/MyList";
import { Routes, Route } from 'react-router-dom'
import Home from "./components/home/Home";
import { MovieContext } from './context/context'

function App() {
const [myList,setMylist]=useState([])

const removeFromMylist=(id)=>{
  const oldList=[...myList]
  const filteredList=oldList.filter(obj=>obj.id===id)
  setMylist(filteredList)
 
}
const addToMylist=(movie)=>{
  const oldList=[...myList]
  const newList=oldList.concat(movie)
  setMylist(newList)
  console.log(myList.length)
}
  return (
    <>
      <NavBar />
      <MovieContext.Provider value={{myList, addToMylist,removeFromMylist}}>
        <Fragment>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='mylist' element={<MyList />} />
          </Routes>
        </Fragment>
      </MovieContext.Provider>
    </>

  );
}

export default App;
