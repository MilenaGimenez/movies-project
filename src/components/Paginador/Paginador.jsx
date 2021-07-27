import {Pagination} from 'antd';
import {URL_API, API_KEY} from '../../utils/constants'
import useFetch from '../../hooks/useFetch';

const Paginador = (props) => {
    let pageNumber = 1
    const url = `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-ES&page=${pageNumber}`
    const {title, popularMovies} = props;
    //Destructuración de los resultados de newMovies.result, de las películas;
    const { result } = popularMovies
    const { results: {
        total_pages,
        total_restsults,
        page
    } } = popularMovies.result;

    console.log(result);
    console.log(result.total_results);
    const onChange = () => {
        pageNumber = pageNumber + 1
        console.log(pageNumber);
        // useFetch(url)
    }
    return (
        <div>
            <Pagination 
                onChange={onChange}
                defaultCurrent={1}  
                total={result.total_results}
                showTotal={total => `Total ${result.total_results} items`}  
                  

                />
        </div>
    );
};

export default Paginador;