import React, { useState, useEffect, useCallback } from 'react';
import CreatePost from './components/createpost/createpost';
import Feed from './components/feed/feed';
import { useAuth } from '../../context/AuthContext';
import API_BASE_URL from '../../config';
import authenticatedFetch from '../../apiUtils';

export default function Body() {
    const [posts, setPosts] = useState([]);
    const { isAuthenticated } = useAuth();
    const API_URL = `${API_BASE_URL}/products`;

    const fetchPosts = useCallback(async () => {
        try {
            const response = await authenticatedFetch(API_URL);
            if (response.ok) {
                const data = await response.json();
                console.log('Fetched posts:', data);
                setPosts(Array.isArray(data) ? data : []);
            } else {
                console.error('Failed to fetch posts');
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }, [API_URL]);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const handlePost = async (content) => {
        if (!isAuthenticated) return;

        try {
            const payload = {
                name: "New Post",
                description: content,
                price: 0,
                content: content,
                date: new Date().toISOString()
            };

            const response = await authenticatedFetch(API_URL, {
                method: 'POST',
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                console.log('Post created successfully');
                fetchPosts();
            } else {
                console.error('Failed to create post');
            }
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <div className="grandparent_body">
            <div className="parent_body">
                <CreatePost onPost={handlePost} />
                <Feed posts={posts} />
            </div>
        </div>
    );
}
