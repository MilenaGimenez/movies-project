import {useEffect, useState} from 'react';
import useFetch from '../hooks/useFetch';
import { URL_API, API_KEY } from '../utils/constants';
import NewMoviesCards from '../components/NewMoviesCards/';
import Paginador from '../components/Paginador';

const NewMovies = () => {      
    const url = `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-ES&page=1`

    const namePage = 'now_playing';

    const newMovies = useFetch(url);
    console.log(newMovies); 

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
        <div>
            <NewMoviesCards movieList={movieList} />   
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
    )
};

export default NewMovies;