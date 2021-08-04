import {Pagination} from 'antd';

export default (props) => { 
    
    const {currentPage, onChange, total} = props;
    
    return (
        <div>
            <Pagination 
                currentPage={currentPage}
                onChange={onChange}
                total={total} 
                pageSize={20}
                />
        </div>
    );
};