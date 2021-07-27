import {useEffect} from 'react';
import useFetch from '../hooks/useFetch';
import { URL_API, API_KEY } from '../utils/constants';
import PopularMoviesCards from '../components/PopularMoviesCards/';
import Paginador from '../components/Paginador';

const Popular = () => {
    
    const url = `${URL_API}/movie/popular?api_key=${API_KEY}&language=en-ES&page=1`        

    const popularMovies = useFetch(url);
    console.log(popularMovies);
    
    return (
        <div>
            <PopularMoviesCards popularMovies={popularMovies} />   
        </div>   
        
    )
};

export default Popular;