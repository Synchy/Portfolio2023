import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navMain">
            <ul className="navMain__list">
                <li className="navMain__list__item" >
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li className="navMain__list__item" >
                    <NavLink to="/about">
                        About
                    </NavLink>
                </li>
                <li className="navMain__list__item">
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                </li>
                <li className="navMain__list__item">
                    <NavLink to="/projects">
                        Projects
                    </NavLink>
                </li>
            </ul>
            <div className='navMain__darkMode'>
                <button></button>
            </div>
            <div className='navMain__language'>
                <svg>Langue</svg>
            </div>
        </nav>
    )
}

export default NavBar