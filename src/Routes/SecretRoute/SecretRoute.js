import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import { AuthContext } from '../../context/AuthProvider';

const SecretRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Spinner></Spinner>
    }
    if (user === null) {
        <Navigate to={'/'} state={{ from: location }} replace></Navigate>
    }
    return children
};

export default SecretRoute;