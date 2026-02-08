import API_BASE_URL from './config';

const authenticatedFetch = async (url, options = {}) => {
    const token = localStorage.getItem('token');

    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };

    if (token) {
        headers['x-auth-token'] = token;
    }

    try {
        const response = await fetch(url, {
            ...options,
            headers,
        });

        // Global handling for expired/invalid tokens
        if (response.status === 401 || response.status === 403) {
            localStorage.removeItem('token');
            // We can't use useNavigate here as this is a plain JS file
            // Redirecting via window.location for global auth failure
            if (window.location.pathname !== '/login') {
                window.location.href = '/login';
            }
        }

        return response;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};

export default authenticatedFetch;
