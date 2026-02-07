import React, { useState, useEffect, useCallback } from 'react';
import CreatePost from './components/createpost/createpost';
import Feed from './components/feed/feed';
import { useAuth } from '../../context/AuthContext';
import API_BASE_URL from '../../config';

export default function Body() {
    const [posts, setPosts] = useState([]);
    const { token, isAuthenticated, logout } = useAuth();
    const API_URL = `${API_BASE_URL}/products`;

    // const handleDummyLogin = () => { ... } // Removed since handled in logout page

    const fetchPosts = useCallback(async () => {
        try {
            // Optional: Include token in fetch if the API requires it for reading
            const headers = {};
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }

            const response = await fetch(API_URL, { headers });
            if (response.ok) {
                const data = await response.json();
                console.log('Fetched posts:', data);
                setPosts(Array.isArray(data) ? data : []);
            } else if (response.status === 401 || response.status === 403) {
                // Handle failed auth here too if needed, but ProtectedRoute covers initial load
                console.error('Auth failed during fetch');
                logout(); // Log out if token is invalid or expired
            } else {
                console.error('Failed to fetch posts');
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }, [API_URL, logout, token]);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]); // Refetch if fetchPosts changes (which includes token)

    const handlePost = async (content) => {
        // ... (handlePost existing logic)
        if (!isAuthenticated) return; // Should already be handled by ProtectedRoute

        try {
            const payload = {
                name: "New Post",
                description: content,
                price: 0,
                content: content,
                date: new Date().toISOString()
            };

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Include JWT token
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                console.log('Post created successfully');
                fetchPosts(); // Refresh feed
            } else if (response.status === 401 || response.status === 403) {
                console.error('Auth failed during post creation');
                logout();
                alert("Your session has expired. Please login again.");
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
    )
}
