import SearchPage from '../components/SearchPage';
import {useState, useEffect} from 'react'
import useFetch from '../hooks/useFetch';
import { URL_API, API_KEY } from '../utils/constants';
import { Input, List, Avatar, Button, Card, } from 'antd';


const Search = () => {
    // const url = `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-ES&page=1`
    //const [busqueda, setBusqueda] = useState('undefined');

    //const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${busqueda}`

    //const allMovies = useFetch(url);
    
   
    // return(
    //     <SearchPage allMovies={allMovies} busqueda={busqueda} setBusqueda={setBusqueda} url={url}/>
    // )
    const [inputUsuario, setImputUsuario] = useState('')
    const [url, setUrl] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputUsuario}`
            );
            const movies = await response.json()
            setUrl(movies)
            console.log(movies);
            console.log(movies.results);

        })();
    }, [inputUsuario]);

    const onChange = (e) => {
        setImputUsuario(e.target.value)
        console.log(setImputUsuario);
    }

    return(
        <div className="search-page">
            <h1>Buscador</h1>
            <Input placeholder="Escribe el nombre de la película que quieras buscar" onChange={onChange}/>
            <div className="card-new-movie">   
                <SearchPage url={url}/>         
                {/* {results.map(movie => (  
                    <SearchPage movie={movie}/>                    
                ))} */}
            </div>
        </div>
    )
};

export default Search;