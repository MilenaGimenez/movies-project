import {useState, useEffect} from 'react';
import { Input, List, Avatar, Button, Card, Row} from 'antd';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import { URL_API, API_KEY } from '../../utils/constants';
import './SearchPage.sass';
import useFetch from '../../hooks/useFetch';

const { Meta } = Card;

const SearchPage = (props) => {
    //let leticia
    // const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=Jack+Reacher`
    // const [inputUsuario, setImputUsuario] = useState('')
    // const [url, setUrl] = useState([]);
   // let busquedaUsuario 
    //const {title, allMovies} = props;

    // if(allMovies.loading || !allMovies.result){
    //     return <Loading />
    // }
  
    // const { results } = allMovies.result;
    // console.log(results); 
    // useEffect(() => {
    //     (async () => {
    //         const response = await fetch(
    //             `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputUsuario}`
    //         );
    //         const movies = await response.json()
    //         setUrl(movies.results)
    //         console.log(movies);
    //         console.log(movies.results);
    //         // const letciana = movies.results
    //         // console.log(letciana);

    //         // const {page, results, total_pages, total_results} = movies;
    //         // console.log(total_results);

    //     })();
    // }, [inputUsuario]);
   
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

    // const onChange = (e) => {
    //     setImputUsuario(e.target.value)
    //     console.log(setImputUsuario);
    //     //console.log(e.target.value);
    //     //busquedaUsuario = e.target.value
    //     //setBusqueda(busquedaUsuario)
    // }
    const {url} = props
    console.log(url);
    const {results} = url  
    //if(!results) return <Loading />
    if(!results) {
        return (
            <div className="logo-y-texto">
                <div>
                    <div className="logo"></div>              
                </div>
                <div>
                    <h2>Escribe el nombre de una película</h2>                
                </div>
            </div>
            
        )
    }

    return (
        <div className="search-page-prueba">
           {results.map(movie => (  
                    <Prueba movie={movie}/>                    
                ))}
        </div>
        
    )
};

const Prueba = (props) => {
    const { movie: 
        {
            poster_path,
            id,
            title
        } 
    } = props;
    const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`;
    
    // const esONo = () => {
    //     if(poster_path === null){
    //         // const posterPath = "../../assets/no-disponible.jpg"        
    //         const posterPath = `https://www.hola.com/imagenes/estar-bien/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-m.jpg`;
        
    //     } else {
    //         const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`;
    //     }
    //     return
    // }
    

    return(
        <Card                     
            style={{ width: 240, margin: 10}}                       
            cover={<img src={posterPath} alt=""/>}
            // cover={<img src={esONo} alt=""/>}
            >
                <Meta 
                    title={title} 
                    style={{textAlign: 'center'}}
                    description={
                    <Link to={`/movie/${id}`}>
                        <Button className="btn-eye"><i className="far fa-eye"></i></Button>
                     </Link>}                    
                />              
        </Card> 
    )
}



export default SearchPage;