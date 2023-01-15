import React from 'react'
import pic1 from '../assets/png/1.png'


const NavBar = () => {
    return (
        <nav className="navMain">
            <figure>
            <img className="logo" src={pic1} alt="flora's logo"/>
            </figure>
            <ul className="navMain__list">
                <li className="navMain__list__item" >
                    <button className="navMain__list__item__link" id="#home">
                        Home
                    </button>
                </li>
                <li className="navMain__list__item" >
                    <button className="navMain__list__item__link" id="#About">
                        About
                    </button>
                </li>
                <li className="navMain__list__item">
                    <button className="navMain__list__item__link"  id="#contact">
                        Contact
                    </button>
                </li>
                <li className="navMain__list__item">
                    <button className="navMain__list__item__link" id="#projects">
                        Projects
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar