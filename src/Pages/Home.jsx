import React from 'react'
import NavBar from '../components/NavBar'


function Home() {
    return(
        <div className='home'>
            <NavBar />
            <div className='home-wrapper'>
                <div className='home-wrapper__left'> 
                    <h1> 
                        Flora 
                        <span>Cesarini</span>
                    </h1>
                    <p> 
                        Développeuse web en recherche 
                        <span>
                            d'alternance ou CDI
                        </span>
                    </p>
                </div>
                <div className='home-wrapper__right'>
                    <svg/>
                </div>
            </div>
        </div>
    )
}

export default Home