import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import API_BASE_URL from '../../config';
import './auth.css';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Assuming the API returns the token in a 'token' field
                if (data.token) {
                    login(data.token);
                    navigate('/');
                } else {
                    console.error("Login successful but no token received");
                    alert("Login failed: Server Error");
                }
            } else {
                console.error("Login failed", data);
                alert(data.message || "Login failed. Please checks your credentials.");
            }
        } catch (error) {
            console.error("Login failed", error);
            alert("Network error. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth_container">
            <div className="auth_card">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form_group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form_group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="auth_btn" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <div className="auth_footer">
                    Don't have an account? <Link to="/register">Sign up</Link>
                </div>
            </div>
        </div>
    );
}
