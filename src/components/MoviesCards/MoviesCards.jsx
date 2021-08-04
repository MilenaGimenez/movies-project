import { List, Avatar, Button, Card } from 'antd';
import { Link } from 'react-router-dom';
import Loading from '../Loading';

import './MoviesCards.sass';

const { Meta } = Card;

const MoviesCards = (props) => {
    // const {title, newMovies} = props;    
  
    //Destructuración de los resultados de newMovies.result, de las películas;
    const { movieList } = props;
    const {results} = movieList;
    console.log(results);
    console.log(results.loading);
    // console.log(results.poster_path); 

    // if(movieList.loading || !movieList.result){
    //      return <Loading />
    // }

    return (
        <div className="cards-new-movie">
            
            <div className="card-new-movie">
            {results.map(movie => (  
                <CardNewMovie movie={movie}/>
                
            ))}
            </div>
        </div>
    );
};

const CardNewMovie = props => {
    const { movie: 
        {
            poster_path,
            id,
            title
        } 
    } = props;
    const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`;
    //console.log(posterPath);
    return (
        <Card                     
            style={{ width: 240, margin: 10}}                       
            cover={<img src={posterPath} alt=""/>}
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
};

export default MoviesCards;