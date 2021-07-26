import useFetch from '../hooks/useFetch';
import { URL_API, API_KEY } from '../utils/constants';
import NewMoviesCards from '../components/NewMoviesCards/';

const NewMovies = () => {
    const urlPopular = `${URL_API}/movie/popular?api_key=${API_KEY}&language=en-ES&page=1`
    const popularMovies = useFetch(urlPopular);
    console.log(popularMovies);
    
    return (
        <div>
            <NewMoviesCards popularMovies={popularMovies}/>
        </div>
        
        
    )
};

export default NewMovies;