import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/header';
import Body from './components/body/body';
import LogoutPage from './components/logout/LogoutPage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import { AuthProvider, useAuth } from './context/AuthContext';
import './App.css';
function ProtectedRoute({ children }) {
  const { isAuthenticated, token, logout } = useAuth();
  const [isVerifying, setIsVerifying] = React.useState(true);
  const [isValid, setIsValid] = React.useState(false);

  React.useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setIsVerifying(false);
        setIsValid(false);
        return;
      }

      try {
        const API_URL = `${process.env.REACT_APP_API_URL || 'https://task-media-app-backend.vercel.app/api'}/products`;
        const response = await fetch(API_URL, {
          headers: { 'x-auth-token': token }
        });

        if (response.ok) {
          setIsValid(true);
        } else {
          logout();
          setIsValid(false);
        }
      } catch (error) {
        console.error("Route verification failed", error);
        setIsValid(false);
      } finally {
        setIsVerifying(false);
      }
    };

    verifyToken();
  }, [token, logout]);

  if (isVerifying) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'white' }}>Verifying Session...</div>;
  }

  if (!isAuthenticated || !isValid) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className='grandparent_socialpage'>
          <div className='parent_socialpage'>
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Body />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/logout" element={<LogoutPage />} />
            </Routes>
            {/* <Footer /> */}
          </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
