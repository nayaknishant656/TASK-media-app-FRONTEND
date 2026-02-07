import React from 'react';
import { useNavigate } from 'react-router-dom';
import './logout.css';

export default function LogoutPage() {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    return (
        <div className="logout_page_container">
            <div className="logout_card">
                <h2>You have been logged out</h2>
                <p>Please log in to continue using the application.</p>

                <button
                    onClick={handleLoginRedirect}
                    className="login_btn"
                >
                    Go to Login
                </button>
            </div>
        </div>
    );
}
