import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './logout.css';

export default function LogoutPage() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleDummyLogin = () => {
        // Simulating receiving a token from server
        const dummyToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummy_payload.dummy_signature";
        login(dummyToken);
        navigate('/'); // Redirect to home after login
    };

    return (
        <div className="logout_page_container">
            <div className="logout_card">
                <h2>You have been logged out</h2>
                <p>Please log in to continue using the application.</p>

                <button
                    onClick={handleDummyLogin}
                    className="login_btn"
                >
                    Login (Demo)
                </button>
            </div>
        </div>
    );
}
