import SearchPage from '../components/SearchPage';
import {useState, useEffect} from 'react'
import useFetch from '../hooks/useFetch';
import { URL_API, API_KEY } from '../utils/constants';
import { Input, List, Avatar, Button, Card, } from 'antd';
import Paginador from '../components/Paginador';

import './search.sass'

const Search = () => {
    const [inputUsuario, setImputUsuario] = useState('')

    const [url, setUrl] = useState([]);
    const [page, setPage] = useState(1) 

    useEffect(() => {
        (async () => {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputUsuario}&language=en-ES&page=${page}`
            );
            const movies = await response.json()
            setUrl(movies)
            console.log(movies);
            console.log(movies.results);

        })();
    }, [inputUsuario, page]);

    const onChangeInput = (e) => {
        setImputUsuario(e.target.value)
        console.log(setImputUsuario);
    }

    const onChange = e => {
        setPage(e)
        console.log(e);
        console.log('hola');
    }

    return(
        <div className="search-page">
            <h1>Buscador</h1>
            <Input placeholder="Escribe el nombre de la película que quieras buscar" onChange={onChangeInput}/>
            <div className="prueba">
                <div className="card-new-movie">   
                    <SearchPage url={url}/>
                </div>
                <Paginador 
                    currentPage={url.page}
                    //defaultCurrent={1}  
                    onChange={onChange}
                    total={url.total_results}
                    //showTotal={total => `Total ${total} items`}  
                    pageSize={20}
                    //showSizeChanger={true}
                />
            </div>
            
            
        </div>
    )
};
export default Search;