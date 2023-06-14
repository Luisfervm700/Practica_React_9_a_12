import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Api = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://api.example.com/posts')
            .then(response => {
            setPosts(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const handlePost = (data) => {
        axios.post('https://api.example.com/posts', data)
            .then(response => {
            setPosts([...posts, response.data]);
        })
        .catch(error => {
            console.log(error);
        });
    };

    const handleUpdate = (id, data) => {
        axios.put(`https://api.example.com/posts/${id}`, data)
            .then(response => {
            setPosts(posts.map(post => {
            if (post.id === id) {
                return response.data;
            } else {
                return post;
            }
            }));
        })
        .catch(error => {
            console.log(error);
        });
    };

    const handleDelete = (id) => {
        axios.delete(`https://api.example.com/posts/${id}`)
            .then(response => {
            setPosts(posts.filter(post => post.id !== id));
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div>
            <ul>
                {posts.map((post) => (
                <li key={post.id}>
                    {post.title}
                        <button onClick={() => handleUpdate(post.id, { title: 'New Title' })}>Update</button>
                        <button onClick={() => handleDelete(post.id)}>Delete</button>
                </li>
                ))}
            </ul>
                <input type="text" placeholder="Title" />
                <button onClick={() => handlePost({ title: 'New Post' })}>Post</button>
        </div>
    );
};

export default Api;