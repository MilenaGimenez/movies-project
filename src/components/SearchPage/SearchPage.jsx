import {useState, useEffect} from 'react';
import { Input, List, Avatar, Button, Card, } from 'antd';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import { URL_API, API_KEY } from '../../utils/constants';
import './SearchPage.sass';
import useFetch from '../../hooks/useFetch';


const SearchPage = () => {
    let leticia
    // const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=Jack+Reacher`
    const [inputUsuario, setImputUsuario] = useState('')
    const [url, setUrl] = useState([]);
   // let busquedaUsuario 
    //const {title, allMovies} = props;

    // if(allMovies.loading || !allMovies.result){
    //     return <Loading />
    // }
  
    // const { results } = allMovies.result;
    // console.log(results); 
    useEffect(() => {
        (async () => {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputUsuario}`
            );
            const movies = await response.json()
            setUrl(movies.results)
            console.log(movies);
            console.log(movies.results);
            // const letciana = movies.results
            // console.log(letciana);

            // const {page, results, total_pages, total_results} = movies;
            // console.log(total_results);

        })();
    }, [inputUsuario]);
   
    // const {page, results, total_pages, total_results} = movies;
    // console.log(total_results);
/*     useEffect(() => {
        (async () => {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputUsuario}`
          );
          const movies = await response.json();
          console.log(movies);
          //setLoadingState(false);
          //setUrl(movies);
        })();
      }, [page, inputValue]); */

    const onChange = (e) => {
        setImputUsuario(e.target.value)
        console.log(setImputUsuario);
        //console.log(e.target.value);
        //busquedaUsuario = e.target.value
        //setBusqueda(busquedaUsuario)
    }
    

    return (
        <div className="search-page">
            <h1>Buscador</h1>
            <Input placeholder="Escribe el nombre de la película que quieras buscar" onChange={onChange}/>
            <div className="card-new-movie">
            {/* {url.results.map(movie => (  
                <Prueba movie={movie}/>                
                ))} */}
            <Prueba url={url}/>
                {/* {letciana.map(movie => (  
                    <Prueba movie={movie}/>
                    
                ))} */}
            </div>
        </div>
    );
};

const Prueba = props => {
    /* const { movie: 
        {
            poster_path,
            id,
            title
        } 
    } = props; */
    const 
        {
            poster_path,
            id,
            title
        }
     = props
     console.log(props);

    /*  props.map(movie => (  
        console.log(movie)          
        )) */
    const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`;
    console.log(title);

    return (
        <Card                     
            style={{ width: 240, margin: 10}}                       
            cover={<img src={posterPath} alt=""/>}
            >
                {/* <Meta 
                    title={title} 
                    style={{textAlign: 'center'}}
                    description={
                    <Link to={`/movie/${id}`}>
                        <Button style={{ border: 0}}><i className="far fa-eye"></i></Button>
                     </Link>}                    
                />   */}               
        </Card> 
    )
};

export default SearchPage;