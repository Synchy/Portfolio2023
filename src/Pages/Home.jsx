import React from 'react'
import NavBar from '../components/NavBar'
import Spline from '@splinetool/react-spline'

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
                    <Spline className='home-wrapper__right__working_girl' scene="https://prod.spline.design/b88lLtHfCtbM2TZ5/scene.splinecode"/>
                </div>
            </div>
        </div>
    )
}

export default Home