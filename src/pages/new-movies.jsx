import {useEffect} from 'react';
import useFetch from '../hooks/useFetch';
import { URL_API, API_KEY } from '../utils/constants';
import NewMoviesCards from '../components/NewMoviesCards/';
import Paginador from '../components/Paginador';

const NewMovies = () => {
    
    const url = `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-ES&page=1`

    // const myInit = {
    //     method: 'GET',
    //     mode: 'cors',
    //     cache: 'default'
    // };
    

    const popularMovies = useFetch(url);
    console.log(popularMovies);
    

    // useEffect(() => {
    //     const url = `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-ES&page=1`
    //     const popularMovies = useFetch(url);
    //     console.log(popularMovies);
    // }, [<NewMoviesCards />]);
    
    return (
        <div>
            <NewMoviesCards popularMovies={popularMovies} />   
            {/* <Paginador popularMovies={popularMovies}
            url={url}/> */}
        </div>   
        
    )
};

export default NewMovies;