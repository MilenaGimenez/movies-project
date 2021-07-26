import { Carousel, Button } from 'antd';
import { Link } from 'react-router-dom';
import Loading from '../Loading';

import './SliderMovies.sass'

const SliderMovies = props => {
    //Destructuración de los props de newMovies
    const { newMovies } = props;
    if(newMovies.loading || !newMovies.result){
        return <Loading />
    }

    //Destructuración de los resultados de newMovies.result, de las películas;
    const { results } = newMovies.result;

    return (
        <Carousel autoplay className="slider-movies">
            {results.map(movie => ( 
                <Movie key={movie.id}
                movie={movie}/>
            ))}
        </Carousel>
    );
};

const Movie = props => {
    const {movie: {
        id, 
        backdrop_path, 
        title,
        overview 
    }} = props;

    const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

    return (
        <div 
            className="slider-movies__movie"
            style={{backgroundImage: `url('${backdropPath}')`}}
        >
            <div className="slider-movies__movie-info">
                <div>
                    <h2>{title}</h2>
                    <p>{overview}</p>
                    <Link to={`/movie/${id}`}>
                        <Button type="primary">Ver más</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default SliderMovies;