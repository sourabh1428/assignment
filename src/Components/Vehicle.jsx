import React, { useEffect, useState } from 'react'
import '../Styling/Movies.css'
import Card from './card';
import ListData from './ListData';
import alienIcon from '../assets/CarProfile.svg'
import Loading from './Loading';
import Hamburger from './Hamburger';


const Vehicle = () => {
    let[gol,setGol]=useState(false);

    const [movieD, setMovieD] = useState([]);
    const [loading, setLoading] = useState(true);
    let mounted;
    
    async function getMovieData() {
        try {
            const res = await fetch('https://swapi.dev/api/starships');
            const data = await res.json();
            console.log(data);
            if (mounted) {
                setMovieD(data.results);
                setLoading(false);
            }
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    }

    useEffect(() => {
         mounted = true;

        getMovieData();

        return () => {
            mounted = false; // Cleanup to prevent state update on unmounted component
        };
    }, []);

    if (loading) {
        return <div><Loading/></div>;
    }

    return (
        <div className='moviesDiv'>
            <Hamburger/>
            <div className='div1'>
            <input type="text" placeholder='Search' />
        </div>
        <div className='div2'>
            <h1>Vehicle</h1>
            <button className='gorl' onClick={()=>setGol(!gol)}>{(gol)?'Grid':'list'}</button>
        </div>
            <div className='div3'>
                {(!gol)?movieD.map((e,i) => (
                    <Card sIcon={alienIcon}  key={i} movieName={e.name} id={i} details={e} />
                )):<ListData movies={movieD}/>}
            </div>

           
        </div>
    );
}

export default Vehicle;
