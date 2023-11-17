import React, { useState } from 'react';
import folderImg from '../assets/FolderSimple.svg';
import rightArrow from '../assets/CaretRight.svg';
import logo from '../assets/logo.svg'
import '../Styling/navbar.css'
import {Link, useNavigate} from 'react-router-dom';
import hamburger from '../assets/hamburger-menu.svg'


const Hamburger = () => {
    const[navBarOpen,setNavBarOpen]=useState(false);
    const navigate=useNavigate();


    const toggleNavBar=()=>{
        setNavBarOpen(!navBarOpen);
        console.log('toggled');
    }
 const navigateAndClose = (path) => {
    navigate(`/${path}`);
    setNavBarOpen(false);
  };
    return (
        <div className='hamburger' >
            <img src={hamburger} height={36} width={72} alt="" onClick={toggleNavBar} />
            {(navBarOpen)? <div className="allNavContent">
        
    <div className='navHeading'  onClick={()=>{navigateAndClose('movies')}}><div><img src={folderImg} alt="" />Film </div> <img src={rightArrow} alt="" /></div>
    <div className='navHeading' onClick={()=>{navigateAndClose('people')}}><div><img src={folderImg} alt="" />People </div> <img src={rightArrow} alt="" /></div>
        <div className='navHeading' onClick={()=>{navigateAndClose('planets')}}><div><img src={folderImg} alt="" />Planet</div> <img src={rightArrow} alt="" /></div>
        <div className='navHeading' onClick={()=>{navigateAndClose('species')}}><div><img src={folderImg} alt="" />Species </div> <img src={rightArrow} alt="" /></div>
        <div className='navHeading' onClick={()=>{navigateAndClose('starships')}}><div><img src={folderImg} alt="" />Starships </div> <img src={rightArrow} alt="" /></div>
        <div className='navHeading' onClick={()=>{navigateAndClose('vehicles')}}><div><img src={folderImg} alt="" />Vehicles</div> <img src={rightArrow} alt="" /></div>
  


    </div>:null}
           
            </div>

    );
}

export default Hamburger;
