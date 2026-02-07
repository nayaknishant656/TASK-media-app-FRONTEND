import React, { useState, useEffect } from 'react';
import CreatePost from './components/createpost/createpost';
import Feed from './components/feed/feed';
import { useAuth } from '../../context/AuthContext';

export default function Body() {
    const [posts, setPosts] = useState([]);
    const { token, login, isAuthenticated } = useAuth();
    const API_URL = 'http://localhost:5002/api/products';

    // Temporary dummy login for demonstration since we don't have a real login form yet
    const handleDummyLogin = () => {
        // Simulating receiving a token from server
        const dummyToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummy_payload.dummy_signature";
        login(dummyToken);
    };

    const fetchPosts = async () => {
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
            } else {
                console.error('Failed to fetch posts');
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [token]); // Refetch if token changes

    const handlePost = async (content) => {
        if (!isAuthenticated) {
            alert("You must be logged in to post!");
            return;
        }

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
                {!isAuthenticated && (
                    <div style={{ padding: '10px', textAlign: 'center', backgroundColor: '#fff', marginBottom: '10px' }}>
                        <p>You are not logged in.</p>
                        <button
                            onClick={handleDummyLogin}
                            style={{ padding: '5px 10px', background: '#1877F2', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                        >
                            Login (Demo)
                        </button>
                    </div>
                )}
                {isAuthenticated && <CreatePost onPost={handlePost} />}
                <Feed posts={posts} />
            </div>
        </div>
    )
}
