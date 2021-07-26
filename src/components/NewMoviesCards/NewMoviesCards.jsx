import { List, Avatar, Button, Card } from 'antd';
import { Link } from 'react-router-dom';
import Loading from '../Loading';

//import './NewMovesCards.sass';
const { Meta } = Card;

const NewMovesCards = props => {
    const {title, popularMovies} = props;
  
    //Destructuración de los resultados de newMovies.result, de las películas;
    const { results } = popularMovies.result;
    console.log(results.poster_path); 

    return (
        <div>
             {results.map(movie => (  
                <Card 
                    hoverable
                    style={{ width: 240 }}                       
                    cover={<CardPopular movie={movie}/>}
                >
                    <Meta title={movie.title} 
                    description={<i className="far fa-eye"></i>} />
                </Card>  
            ))}
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
    console.log(posterPath);
    return (

            <img src={posterPath} alt=""/>
       
    )
};

export default NewMovesCards;