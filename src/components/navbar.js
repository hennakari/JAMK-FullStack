import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

function Navbar() {
    const [click, setClick] =useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu= () => setClick(false);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <div className="navbar-logo-text">Harkka-Dashboard</div>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' :'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Etusivu
                    </Link>
                    </li> 
                    <li className='nav-item'>
                    <Link to='/recordList' className='nav-links' onClick={closeMobileMenu}>
                        Tapahtumat
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/create' className='nav-links' onClick={closeMobileMenu}>
                        Luo tapahtuma
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/toolList' className='nav-links' onClick={closeMobileMenu}>
                        Työkalut
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/createTool' className='nav-links' onClick={closeMobileMenu}>
                        Lisää työkalu
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;