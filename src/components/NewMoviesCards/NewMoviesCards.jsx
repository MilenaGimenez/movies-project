import { List, Avatar, Button, Card } from 'antd';
import { Link } from 'react-router-dom';
import Loading from '../Loading';

import './NewMoviesCards.sass';

const { Meta } = Card;

const NewMovesCards = (props) => {
    const {title, popularMovies} = props;

    if(popularMovies.loading || !popularMovies.result){
        return <Loading />
    }
  
    //Destructuración de los resultados de newMovies.result, de las películas;
    const { results } = popularMovies.result;
    console.log(results.poster_path); 

    return (
        <div className="cards-popular">
            <h1>Ultimos lanzamientos</h1>
            <div className="card-popular">
            {results.map(movie => (  
                <CardPopular movie={movie}/>
                
            ))}
            </div>
        </div>
    );
};

const CardPopular = props => {
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
                        <Button style={{ border: 0}}><i className="far fa-eye"></i></Button>
                     </Link>}                    
                />                 
        </Card>    
    )
};

export default NewMovesCards;