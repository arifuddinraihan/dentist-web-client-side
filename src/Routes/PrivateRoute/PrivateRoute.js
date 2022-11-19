import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <h2 className='text-center text-5xl font-bold'>Loading...</h2>
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }}></Navigate>
};

export default PrivateRoute;