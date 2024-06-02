import React from 'react';
import { Navigate } from 'react-router-dom';
    
const CounterProtectedRoute = ({children}) => {
    const isAuthenticated = !!localStorage.getItem('userEmail');
    return isAuthenticated ? children : <Navigate to="/login" />;
}

export default CounterProtectedRoute