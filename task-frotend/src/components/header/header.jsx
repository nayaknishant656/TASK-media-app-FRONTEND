import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './header.css';

export default function Header() {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/logout');
    };

    return (
        <div className="grandparent_header">
            <div className="parent_header">
                <div className="header_title">My App</div>
                {isAuthenticated && (
                    <button onClick={handleLogout} className="logout_btn">
                        Logout
                    </button>
                )}
            </div>
        </div>
    )
}
