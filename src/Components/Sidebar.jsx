import React from 'react';
import '../Styling/navbar.css'


const Sidebar = ({dataSide,setTapped}) => {

    const pcss={"color":"var(--Text-Black, #252C32)","fontFeatureSettings":"'clig' off, 'liga' off","fontFamily":"Poppins","fontSize":"12px","fontStyle":"normal","fontWeight":"400","lineHeight":"20px","letterSpacing":"0.1px"};

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
            <div style={{background:'white',padding:'10px',borderRadius:'10px'}}><p style={pcss}>{dataSide.title}</p></div>
            <label htmlFor="">Opening  Crawl</label>
            <div style={{background:'white',padding:'10px',borderRadius:'10px'}}><p style={pcss}>{dataSide.crawl}</p></div> 
            <label htmlFor="">Genre</label>
            <div style={{background:'white',padding:'10px',borderRadius:'10px'}}><p style={pcss}>{dataSide.genre}</p></div>
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
