import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from '../components/NavBar'
import NavFooter from '../components/NavFooter'

function Home() {
    return(
        <div className='home'>
            <NavBar />
                <div className='home-wrapper'>
                    <div className='home-wrapper__left'> 
                        <h1> Bienvenue </h1>
                        <p> Jujubes jelly carrot cake apple pie croissant caramels sesame snaps chocolate croissant. Candy canes jelly cookie pie muffin. 
                            Jelly candy canes tiramisu brownie caramels macaroon jujubes. Carrot cake biscuit candy tart chocolate cake gummi bears caramels pie.
                            Carrot cake cupcake  croissant liquorice bonbon fruitcake biscuit. Sweet topping topping carrot cake sweet jujubes cheesecake. 
                            Jelly-o biscuit sugar plum gummi bears croissant candy bonbon gummies. Jelly-o cookie tart fruitcake fruitcake. 
                        </p>
                        <NavLink to='/about' className='btn'>
                            En apprendre plus à mon sujet 
                        </NavLink> 
                    </div>
                    <div className='home-wrapper__right'>
                        <svg/>
                    </div>
                </div>
            <NavFooter />
        </div>
    )
}

export default Home