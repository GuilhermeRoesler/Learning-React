import React from 'react';
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';
import { assistencial, administrativo, outros } from '../data/navbarOptions';

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
            <nav className='navbar'>
                <Dropdown options={assistencial} name='Assistencial' type='submenu' />
                <Dropdown options={administrativo} name='Administrativo' type='submenu' />
                <Dropdown options={outros} name={'Outros'} type='submenu' />
                <a onClick={handleLogout} href='/'>Logout</a>
            </nav>
        </header>
    );
}

export default Header;