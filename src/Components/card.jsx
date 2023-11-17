import React, { useContext } from 'react';
import btn from '../assets/Menu.svg'

import { useState,useEffect } from 'react';

import '../Styling/Card.css'
import Alldetail from './details'



const Card = ({movieName,id,details,sIcon,setDataSide,setTapped}) => {

    const [image, setImage] = useState(null);

    useEffect(() => {
        const imageUrl = `https://picsum.photos/200?random=${id}`;

        fetch(imageUrl)
            .then(response => {
                if (response.ok) {
                    setImage(imageUrl);
                } else {
                    throw new Error('Failed to fetch image');
                }
            })
            .catch(error => {
                console.error('Error fetching image:', error);
            });
    }, [id]);



    function handleClick(){
        console.log(details);
        setDataSide({'title':details.title,'crawl':details.opening_crawl,'genre':details.producer});
        setTapped(true);
       
    }
        
     

    return (
        
        <div className='card' onClick={handleClick}>
            <img src={image} height={200} width={300} alt="" />
            <div className='cardFoot'><img src={sIcon} alt="" /><p>{movieName}</p><button><img src={btn} alt="" /></button></div>

        </div>
     
    );
}

export default Card;
