import { Input, List, Avatar, Button, Card, } from 'antd';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import './SearchPage.sass';

const SearchPage = props => {
    let busqueda 
    const {title, allMovies} = props;

    if(allMovies.loading || !allMovies.result){
        return <Loading />
    }
  
    const { results } = allMovies.result;
    console.log(results); 
    const onChange = (e) => {
        console.log(e.target.value);
        busqueda = e.target.value
    }

    return (
        <div className="search-page">
            <h1>Buscador</h1>
            <Input placeholder="Escribe el nombre de la película que quieras buscar" onChange={onChange}/>
            <div className="card-new-movie">
            {results.map(movie => (  
                <Prueba movie={movie}/>
                
            ))}
            </div>
        </div>
    );
};

const Prueba = props => {
    const { movie: 
        {
            poster_path,
            id,
            title
        } 
    } = props;
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