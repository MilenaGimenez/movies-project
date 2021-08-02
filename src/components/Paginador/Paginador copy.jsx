import {Pagination} from 'antd';
import {URL_API, API_KEY} from '../../utils/constants'
import useFetch from '../../hooks/useFetch';
import {useState, useEffect} from 'react';

const Paginador = (props) => {
    // const [paginator, setPaginator] = useState({
    //     offset: 0,
    //     currentPageElements: [],
    //     elementsPerPage: 20,
    //     pagesCount: 1,
    //     allElements: [],
    //     totalElementsCount: 0
    // })

    /* const getAllElements = async () => {
        const url = `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-ES&page=1`
        const allElements = await fetch(url);
        const movies = await allElements.json()
        //console.log(allElements);
        //console.log(movies);
        setPaginator({
            allElements: movies.results,
            totalElementsCount: movies.total_results
        }, () => {
            console.log('hello');
            //setPaginationStates();
        });
    } */
    //let pageNumber = 1
    //const url = `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-ES&page=${pageNumber}`
    //const {title, newMovies} = props;
    //Destructuración de los resultados de newMovies.result, de las películas;
    //const { results } = newMovies.result;
    //const { result } = newMovies
    // const { results: {
    //     total_pages,
    //     total_restsults,
    //     page
    // } } = newMovies.result;

    /* const onChange = () => {
        pageNumber = pageNumber + 1
        console.log(pageNumber);
    } */
    const {namePage} = props
    console.log(namePage);

    const [url, setUrl] = useState([]);
    const [pageSelect, setPageSelect] = useState('1')
    useEffect(() => {
        (async () => {
            const response = await fetch(
                `${URL_API}/movie/${namePage}?api_key=${API_KEY}&language=en-ES&page=${pageSelect}`
            );
            const movies = await response.json()
            setUrl(movies)
            setPageSelect(movies.page)
            console.log(movies);
            console.log(url);
            console.log('pageselct en l fetch', pageSelect);
            //console.log(movies);
            //console.log(movies.results);

        })();
    }, [setPageSelect]);
    const { results, total_pages, total_results } = url;
    console.log(total_pages);

    //const {title, newMovies} = url;
    //Destructuración de los resultados de newMovies.result, de las películas;
    //const { page, results, total_pages, total_results } = url.result;

    //console.log(newMovies);

    const onChange = (e) => {
        //pageNumber = pageNumber + 1
        //console.log('on change');
        console.log(e);
        console.log('antes del set, soy page select', pageSelect);
        setPageSelect(e)
        console.log('despues del set, soy page select', pageSelect);
        // page = e
        // console.log(page);
        // function(page, pageSize)
    }
    
    return (
        <div>
            <Pagination 
                defaultCurrent={1}  
                onChange={onChange}
                total={total_results}
                showTotal={total => `Total ${total} items`}  
                //pageSize={total_pages}
                //showSizeChanger={true}
                />
        </div>
    );
};

export default Paginador;