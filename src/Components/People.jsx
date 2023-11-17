import React, { useEffect, useState } from 'react'
import '../Styling/Movies.css'
import Card from './card';
import ListData2 from './ListData2';
import alienIcon from '../assets/Users.svg'
import Loading from './Loading';
import Hamburger from './Hamburger';

const People = () => {
    let[gol,setGol]=useState(false);
   
    const [movieD, setMovieD] = useState([]);
    const [loading, setLoading] = useState(true);
    let mounted;

    
    async function getMovieData() {
        try {
            const res = await fetch('https://swapi.dev/api/people');
            const data = await res.json();
       
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
            <h1>People</h1>
            <button className='gorl' onClick={()=>setGol(!gol)}>{(gol)?'Grid':'list'}</button>
        </div>
            <div className='div3'>
                {(!gol)?movieD.map((e,i) => (
                    <Card sIcon={alienIcon}  key={i} movieName={e.name} id={i} details={e} />
                )):<ListData2 movies={movieD} param1={'name'} param2={'gender'} param3={'height'}/>}
            </div>

           
        </div>
    );
}

export default People;
