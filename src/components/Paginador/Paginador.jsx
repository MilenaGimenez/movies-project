import {Pagination} from 'antd';
import {URL_API, API_KEY} from '../../utils/constants'
import useFetch from '../../hooks/useFetch';
import {useState, useEffect} from 'react';

export default (props) => { 
    
    const {currentPage, onChange, total} = props;
    
    return (
        <div>
            <Pagination 
                currentPage={currentPage}
                //defaultCurrent={1}  
                onChange={onChange}
                total={total}
                //showTotal={total => `Total ${total} items`}  
                pageSize={20}
                //showSizeChanger={true}
                />
        </div>
    );
};