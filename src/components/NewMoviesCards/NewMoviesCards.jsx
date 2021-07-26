import { List, Avatar, Button, Card } from 'antd';
import { Link } from 'react-router-dom';
import Loading from '../Loading';

//import './NewMovesCards.sass';

const NewMovesCards = props => {
    const {title, popularMovies} = props;
    console.log(props);
    // console.log(popularMovies.result.results.length);
    // console.log(popularMovies.result.results);

    //Destructuración de los resultados de newMovies.result, de las películas;
    const { results } = popularMovies.result;
    console.log(results);

    return (
        <div>
             {results.map(movie => (                 
                
                <Card title="Card title">
                Card content
                </Card>               
                
                
            ))}
           {/*  <List
                className="movie-list"
                size="default"
                header={<h2>{title}</h2>}
                bordered
                dataSource={popularMovies.result.results}
                renderItem={movie => <RenderMovie movie={movie}/>}
            /> */}

        </div>
    );
};

// const RenderMovie = props => {
//     const { movie: 
//         {
//             poster_path,
//             id,
//             title
//         } 
//     } = props;
//     const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`;

//     return (
//         <List.Item className="movie-list__movie">
//             <List.Item.Meta 
//                 avatar={<Avatar src={posterPath} />}
//                 title={ <Link to={`/movie/${id}`}>{title}</Link>}
//             />
//             <Link to={`/movie/${id}`}>
//                 <Button 
//                     type="primary"
//                     shape="circle"
//                 >

//                 </Button>
//             </Link>
//         </List.Item>
//     )
// };

export default NewMovesCards;