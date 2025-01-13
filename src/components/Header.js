import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remover os tokens do localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');

        // Redirecionar para a página de login
        navigate('/login');
    };

    return (
        <header className='header'>
            <a href='/home'>FHGV</a>
            <Navbar logout={handleLogout} />
        </header>
    );
}

export default Header;