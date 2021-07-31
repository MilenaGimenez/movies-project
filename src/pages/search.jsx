import SearchPage from '../components/SearchPage';
import {useState, useEffect} from 'react'
import useFetch from '../hooks/useFetch';
import { URL_API, API_KEY } from '../utils/constants';


const Search = () => {
    // const url = `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-ES&page=1`
    const [busqueda, setBusqueda] = useState('undefined');

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${busqueda}`

    const allMovies = useFetch(url);
    
    useEffect(() => {
        console.log('dadadad');
    }, [busqueda, setBusqueda]);

    console.log(allMovies);
    return(
        <SearchPage allMovies={allMovies} busqueda={busqueda} setBusqueda={setBusqueda} url={url}/>
    )
};

export default Search;