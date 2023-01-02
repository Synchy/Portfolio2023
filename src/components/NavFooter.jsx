import React from 'react';
import { ReactComponent as Linkedin } from '../assets/svg/linkedin.svg'
import { ReactComponent as CodePen } from '../assets/svg/codepen.svg'
import { ReactComponent as Github } from '../assets/svg/github.svg'
import DownloadButton from './DownloadButton'



const navFooter = () => {
    return (
        <nav className="navFooter">
            <ul className="navFooter__list">
                <li className="navFooter__item__one">
                    <a href='https://www.linkedin.com/in/flora-cesarini/' >
                        <Linkedin />
                    </a>
                </li>
                <li className="navFooter__item__two">
                    <a href='https://codepen.io/Synchy'>
                        <CodePen/>
                    </a>
                </li>
                <li className="navFooter__item__three">
                    <a href='https://github.com/Synchy'>
                        <Github/>
                    </a>
                </li>
                <li className="navFooter__item__four">
                    <DownloadButton />
                </li>
            </ul>
        </nav>
    )
}

export default navFooter