import React from 'react'
import { List, Skeleton } from 'antd'

const PostsList = ({ posts, loading }) => {
    const postsList = posts.map((post) => post.title)

    return !loading ? (
        // <div>
        //     {posts.map((post) => (
        //         <li key={post.id}>{post.title}</li>
        //     ))}
        // </div>
        <List 
            bordered 
            dataSource={postsList} 
            renderItem={item => <List.Item>{item}</List.Item>} 
        />
    ) : (
        <Skeleton active />
    )
}

export default PostsList
