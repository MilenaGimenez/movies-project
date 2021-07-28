import SearchPage from '../components/SearchPage';
import useFetch from '../hooks/useFetch';
import { URL_API, API_KEY } from '../utils/constants';

const Search = () => {
    const url = `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-ES&page=1`

    const allMovies = useFetch(url);

    console.log(allMovies);
    return(
        <SearchPage allMovies={allMovies}/>
    )
};

export default Search;