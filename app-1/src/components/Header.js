import React from 'react';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';
import { useNavigate } from 'react-router-dom';

const assistencial = [
    {
        name: 'LEAN',
        link: '/outros',
        subOptions: [
            { name: 'Procedimentos' },
            { name: 'Média Permanência' }
        ]
    },
    {
        name: 'HUDDLE',
        subOptions: [
            { name: 'Emergência' },
            { name: 'Clinica Médica' }
        ]
    },
    {
        name: 'Liven',
        subOptions: [
            { name: 'Setores' }
        ]
    },
    {
        name: 'ESCALA DE FUGULIN',
        subOptions: [
            { name: 'Pacientes' }
        ]
    },
    {
        name: 'ESCALA DE PEDIATRIA',
        subOptions: [
            { name: 'Pacientes Humpty' },
            { name: 'Pacientes Nips' },
            { name: 'Pacientes Cheops' }
        ]
    },
    {
        name: 'CURATIVOS',
        subOptions: [
            { name: 'Pacientes' },
            { name: 'Buscas anteriores' }
        ]
    }
]

const administrativo = [
    {
        name: 'SAME',
        subOptions: [
            { name: 'Solicitação de Documentos' },
            { name: 'Registrar Exames Entregues' },
            { name: 'Ver Solicitações' },
            { name: 'Entregas Realizadas' }
        ]
    },
    {
        name: 'RaES',
        subOptions: [
            { name: 'Contas' }
        ]
    },
    {
        name: 'PRODUTOS',
        subOptions: [
            { name: 'Todos Produtos', link: '/products' },
            { name: 'Buscar Produtos' }
        ]
    },
    {
        name: 'PATRIMONIO',
        subOptions: [
            { name: 'Produtos SIGH' }
        ]
    }
]

const outros = [
    {
        name: 'Integração',
        subOptions: [
            { name: 'Visualizar' }
        ]
    },
    {
        name: 'Painel',
    }
]

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
                <Dropdown2 options={assistencial} name='Assistencial' type='submenu' />
                <Dropdown options={administrativo} name='Administrativo' type='submenu' />
                <Dropdown options={outros} name={'Outros'} type='submenu' />
                <a onClick={handleLogout} href='/'>Logout</a>
            </nav>
        </header>
    );
}

export default Header;