import React from 'react'
import NavBar from '../components/NavBar'
import WorkingGirl from '../components/WorkingGirl'
import pic2 from '../assets/png/2.png'

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
                    <img className='arrowDown' src={pic2} alt='bottom arrow'/>
                </div>
                <div className='home-wrapper__right'>
                    <WorkingGirl/>
                </div>
            </div>
        </div>
    )
}

export default Home