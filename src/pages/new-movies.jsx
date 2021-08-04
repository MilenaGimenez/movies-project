import {useEffect, useState} from 'react';
import useFetch from '../hooks/useFetch';
import { URL_API, API_KEY } from '../utils/constants';
import MoviesCards from '../components/MoviesCards';
import Paginador from '../components/Paginador';
import Loading from '../components/Loading';

import './new-movies.sass'

const NewMovies = () => {      
    const [movieList, setMovieList] = useState([])
    const [page, setPage] = useState(1) 

    useEffect(()=>{
        (async() => {
            const response = await fetch(
                `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-ES&page=${page}`
            )
            const movies = await response.json()
            setMovieList(movies)
            console.log(movies);
        })()
    },[page])

    const onChange = e => {
        setPage(e)
        console.log(e);
        console.log('hola');
    }
        
    return (
        <div className="new-movies">
            <h1 style={{
                    textAlign: 'center',
                    margin: '20px'
                }}
            >Ultimos lanzamientos</h1>
            <div className="prueba">
                {movieList.results ? 
                    <MoviesCards movieList={movieList} /> 
                    : <Loading />}
                                
                <Paginador 
                    currentPage={movieList.page}
                    //defaultCurrent={1}  
                    onChange={onChange}
                    total={movieList.total_results}
                    //showTotal={total => `Total ${total} items`}  
                    pageSize={20}
                    //showSizeChanger={true}
                />
            </div>            
        </div>           
    )
};

export default NewMovies;