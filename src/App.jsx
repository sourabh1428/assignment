import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/navBar'
import Body from './Components/body'
import {Routes,Route} from 'react-router-dom';
import Movies from './Components/movies';
import People from './Components/People'
import Planet from './Components/Planet'
import Species from './Components/Species'
import Starships from './Components/Starships'
import Vehicle from './Components/Vehicle'
import Alldetail from './Components/details'
import Sidebar from './Components/Sidebar'
import Hamburger from './Components/Hamburger'


function App() {

  let[isTapped,setTapped]=useState(false);
  let[dataSide,setDataSide]=useState({'title':null,'crawl':null,'genre':null});
  let stateSideBar=useContext(Alldetail);


  return (
    <div className='app'>
    {(isTapped)?<Sidebar dataSide={dataSide} setTapped={setTapped} />:<NavBar/>}
  
    <Routes>
    
        <Route path='/' element={<Body/>} />
        <Route path='movies' element={<Movies setDataSide={setDataSide} setTapped={setTapped}/>}/>
        <Route path='people' element={<People/>}></Route>
        <Route path='planets' element={<Planet/>}></Route>
        <Route path='species' element={<Species/>}></Route>
        <Route path='starships' element={<Starships/>}></Route>
        <Route path='vehicles' element={<Vehicle/>}></Route>



    </Routes>
   
    </div>
  )
}

export default App
