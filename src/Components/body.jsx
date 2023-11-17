import React from 'react'
import '../Styling/body.css'
import starwar from '../assets/Rectangle 6.svg'
import Hamburger from './Hamburger';


function Body() {
  return (
   
    <div className='bodyS'>
        <Hamburger/>
        <div className='bodys1'>
            <img src={starwar} alt="" />
            <h1>Welcome to Star Wars Dashboard</h1>
            <p>Star Wars is an American epic space opera multimedia franchise created by
                 George Lucas, which began with the eponymous 1977
                 film and quickly became a worldwide pop culture phenomenon.</p>
        </div>

    </div>

  )
}

export default Body;