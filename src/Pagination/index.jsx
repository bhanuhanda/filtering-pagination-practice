import axios from 'axios'
import React, { useState, useEffect } from 'react'
import PostsList from './PostsList'
import PaginationRow from './PaginationRow'
import { Typography } from 'antd';

const { Title } = Typography;

const Pagination = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(8)

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(res.data);
            setLoading(false);
        }

        fetchPosts();
    }, [])

    // Get Posts for Current Page
    const indLastPost = currentPage * postsPerPage;
    const indFirstPost = indLastPost - postsPerPage;
    const currentPagePosts = posts.slice(indFirstPost, indLastPost)

    // pagination logic
    const paginate = (pageNum) => setCurrentPage(pageNum)

    return (
        <div align={'center'}>
            <Title mark>Pagination</Title>
            <div style={{width: '80%', marginBottom: '2rem'}}>
                <PostsList posts={currentPagePosts} loading={loading} />
            </div>
            <PaginationRow totalPosts={posts.length} postsPerPage={postsPerPage} paginate={paginate} />
        </div>
    )
}

export default Pagination
