import { Pagination } from 'antd';
import React from 'react'

const PaginationRow = ({ totalPosts, postsPerPage, paginate }) => {
    // const pageNums = [];
    // const numOfPages = Math.ceil(totalPosts/postsPerPage);
    // console.log({numOfPages})
    // for(let i=0; i<numOfPages; i++){
    //     pageNums.push(i+1);
    // }

    return (
        // <div>
        //     {pageNums.map((pageNum) => (
        //         <span key={pageNum}>
        //             <a href="!#" onClick={() => paginate(pageNum)}>{pageNum}</a>
        //         </span>
        //     ))}
        // </div>
        <Pagination 
            onChange={pageNum => paginate(pageNum)} 
            total={totalPosts} 
            pageSize={postsPerPage}
            pageSizeOptions={[]}
        />
    )
}

export default PaginationRow
