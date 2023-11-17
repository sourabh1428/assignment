import React, { useState } from 'react';
import folderImg from '../assets/FolderSimple.svg';
import rightArrow from '../assets/CaretRight.svg';
import logo from '../assets/logo.svg'
import '../Styling/navbar.css'
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    const[navBarOpen,setNavBarOpen]=useState(false);
    const toggleNavBar=()=>{
        setNavBarOpen(!navBarOpen);
        console.log('toggled');
    }

    return (
        <div className='nav-bar' >
            <img src={logo} height={36} width={72} alt="" />
            <div className="allNavContent">
       
                <NavLink to='movies'><div   className='navHeading' activeclassname='activeNavHeading'><div><img src={folderImg} alt="" />Film </div> <img src={rightArrow} alt="" /></div></NavLink>
                <NavLink to='people'><div   className='navHeading' activeclassname='activeNavHeading'><div><img src={folderImg} alt="" />People </div> <img src={rightArrow} alt="" /></div></NavLink>
                <NavLink to='planets'><div   className='navHeading' activeclassname='activeNavHeading'><div><img src={folderImg} alt="" />Planet</div> <img src={rightArrow} alt="" /></div></NavLink>
                <NavLink to='species'><div   className='navHeading' activeclassname='activeNavHeading'><div><img src={folderImg} alt="" />Species </div> <img src={rightArrow} alt="" /></div></NavLink>
                <NavLink to='starships'><div   className='navHeading' activeclassname='activeNavHeading'><div><img src={folderImg} alt="" />Starships </div> <img src={rightArrow} alt="" /></div></NavLink>
                <NavLink to='vehicles'><div   className='navHeading' activeclassname='activeNavHeading'><div><img src={folderImg} alt="" />Vehicles</div> <img src={rightArrow} alt="" /></div></NavLink>
          


            </div>
            </div>

    );
}

export default NavBar;
