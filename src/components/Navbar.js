import React, { useState, useEffect } from 'react'
import Dropdown from './Dropdown';
import { assistencial, administrativo, outros } from '../data/navbarOptions';

const Navbar = (props) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('access_token')) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }, [localStorage.getItem('access_token')])

    return (
        <>
            {isVisible && (
                <nav className='navbar'>
                    <Dropdown options={assistencial} name='Assistencial' type='submenu' />
                    <Dropdown options={administrativo} name='Administrativo' type='submenu' />
                    <Dropdown options={outros} name={'Outros'} type='submenu' />
                    <a onClick={props.logout} href='/'>Logout</a>
                </nav>
            )}
        </>
    )
}

export default Navbar;