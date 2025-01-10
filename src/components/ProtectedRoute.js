import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('access_token');

    // Se não houver token, o usuário será redirecionado para a página de login
    if (!token) {
        return <Navigate to="/login" />;
    }

    // Se o token estiver presente, renderiza a página (children)
    return children;
};

export default ProtectedRoute;