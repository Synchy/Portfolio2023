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
                        <p>Home</p>
                    </button>
                </li>
                <li className="navMain__list__item" >
                    <button className="navMain__list__item__link" id="#About">
                        <p>About</p>
                    </button>
                </li>
                <li className="navMain__list__item">
                    <button className="navMain__list__item__link"  id="#contact">
                        <p>Contact</p>
                    </button>
                </li>
                <li className="navMain__list__item">
                    <button className="navMain__list__item__link" id="#projects">
                        <p>Projects</p>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar