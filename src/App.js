import NavBar from "./components/NavBar/NavBar";
import './App.css'
import Banner from './components/Banner/Banner'
import Posters from "./components/posters/Posters";
import {action,horror,comedy, documentary, original,romance} from './urls'

function App() {
  return (
    <div className="App">
     <NavBar/>
    <Banner/>
    <Posters url={original} title= 'Netflix Originals'/>
    <Posters url={action} isSmall title= 'Action Movies'/>
    <Posters url={comedy} title='Comedy Movies' isSmall/>
    <Posters url={horror} title='Horror Movies' isSmall/>
    <Posters url={romance} title='Romance Movies' isSmall/>
    <Posters url={documentary} title='Documentaries' isSmall/>
    </div>
  );
}

export default App;
