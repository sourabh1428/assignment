import React from 'react';
import '../Styling/navbar.css'


const Sidebar = ({detail,setTapped}) => {

    const buttonStyle = {
        
    
        background: '#CB1A80',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background 0.3s ease',
      };
    
      const handleHover = () => {
        buttonStyle.background = '#2980b9';
      };
    
      const handleLeave = () => {
        buttonStyle.background = '#3498db';
      };
    return (
        <div className='nav-bar'>
        <h1 className='movieh1'>Movie Details</h1>
        <div className='sideBar'>
            <img src="" alt="" />
            <label htmlFor="">Title</label>
            <p>{detail.title}</p>
            <label htmlFor="">Opening  Crawl</label>
            <p>{detail.crawl}</p> 
            <label htmlFor="">Genre</label>
            <p>{detail.genre}</p>
        </div>
        <button className='close1'
      style={buttonStyle}
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
      onClick={()=>setTapped(false)}
      >Close</button>
        </div>
    );
}

export default Sidebar;
