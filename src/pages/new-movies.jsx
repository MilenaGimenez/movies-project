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
    

    const newMovies = useFetch(url);
    console.log(newMovies);
    

    // useEffect(() => {
    //     const url = `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-ES&page=1`
    //     const newMovies = useFetch(url);
    //     console.log(newMovies);
    // }, [<NewMoviesCards />]);
    
    return (
        <div>
            <NewMoviesCards newMovies={newMovies} />   
            {/* <Paginador newMovies={newMovies}
            url={url}/> */}
        </div>   
        
    )
};

export default NewMovies;