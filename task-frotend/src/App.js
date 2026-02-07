import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/header';
import Body from './components/body/body';
import LogoutPage from './components/logout/LogoutPage';
import { AuthProvider, useAuth } from './context/AuthContext';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/logout" replace />;
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
