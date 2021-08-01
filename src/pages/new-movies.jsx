import {useEffect} from 'react';
import useFetch from '../hooks/useFetch';
import { URL_API, API_KEY } from '../utils/constants';
import NewMoviesCards from '../components/NewMoviesCards/';
import Paginador from '../components/Paginador';

const NewMovies = () => {    
    const url = `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-ES&page=1`

    const namePage = 'now_playing';

    const newMovies = useFetch(url);
    console.log(newMovies);    
    
    return (
        <div>
            <NewMoviesCards newMovies={newMovies} />   
            <Paginador namePage={namePage}
            />
        </div>           
    )
};

export default NewMovies;