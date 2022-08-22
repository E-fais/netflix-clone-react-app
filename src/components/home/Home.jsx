import React from 'react'
import Posters from '../posters/Posters'
import {action,horror,comedy, documentary, original,romance} from '../../urls'
import Banner from '../Banner/Banner'
function Home() {
  return (
    <div>
    <Banner />
    <Posters url={original} title= 'Netflix Originals'/>
    <Posters url={action} isSmall title= 'Action Movies'/>
    <Posters url={comedy} title='Comedy Movies' isSmall/>
    <Posters url={horror} title='Horror Movies' isSmall/>
    <Posters url={romance} title='Romance Movies' isSmall/>
    <Posters url={documentary} title='Documentaries' isSmall/>
    </div>
  )
}

export default Home