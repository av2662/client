import React, { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import { BsCalendarWeek } from "react-icons/bs";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import {IconContext} from 'react-icons/lib';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton = (false);
        }
        else {
            setButton = (true);
        }
    }
    /*useEffect =(() => {
        showButton();
    }, []);
    */ 

    return (
        <>
            <IconContext.Provider value={{color: '#6D2E46'}}>
            <div className='navbar'>
                <div className='navbar-container container'>
                    <Link to="/" className='navbar-logo'onClick={closeMobileMenu}>
                        <BsCalendarWeek className='navbar-icon' />
                        TaskTracker
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/login" className='nav-links'>
                                Login
                            </Link>
                           
                            
                        </li>
                        <li className='nav-btn'>
                            {button ? (
                                <Link to='/sign-up' className='btn-link'onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline'> Sign Up!</Button>
                                </Link>
                            ) : (
                                <Link to='/sign-up' className='btn-link' onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>Sign Up</Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>


    )
}

export default Navbar


