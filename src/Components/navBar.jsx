import React, { useState } from 'react';
import folderImg from '../assets/FolderSimple.svg';
import rightArrow from '../assets/CaretRight.svg';
import logo from '../assets/logo.svg'
import '../Styling/navbar.css'
import {Link} from 'react-router-dom';

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
       
                <Link to='movies'><div className='navHeading'><div><img src={folderImg} alt="" />Film </div> <img src={rightArrow} alt="" /></div></Link>
                <Link to='people'><div className='navHeading'><div><img src={folderImg} alt="" />People </div> <img src={rightArrow} alt="" /></div></Link>
                <Link to='planets'><div className='navHeading'><div><img src={folderImg} alt="" />Planet</div> <img src={rightArrow} alt="" /></div></Link>
                <Link to='species'><div className='navHeading'><div><img src={folderImg} alt="" />Species </div> <img src={rightArrow} alt="" /></div></Link>
                <Link to='starships'><div className='navHeading'><div><img src={folderImg} alt="" />Starships </div> <img src={rightArrow} alt="" /></div></Link>
                <Link to='vehicles'><div className='navHeading'><div><img src={folderImg} alt="" />Vehicles</div> <img src={rightArrow} alt="" /></div></Link>
          


            </div>
            </div>

    );
}

export default NavBar;
