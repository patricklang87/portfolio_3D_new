import React, {useState, useEffect} from 'react';
import './Header.css';
import hamburger from '../../assets/images/Hamburger_icon.png';
import linkedin from '../../assets/logos/In-Blue-40@2x.png';
import github from '../../assets/logos/GitHub-Mark-64px.png'

export default function Header() {
    const [navVisible, setNavVisible] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 480) {
            setNavVisible(true);
        }
    }, [navVisible]);

    const handleClick = () => {
        if (window.innerWidth <= 480) {
            setNavVisible(false);
        }
    }

    return (
        <>
        <img 
            className="hamburgerIcon"
            src={hamburger}
            alt="hamburger icon"
            style={(navVisible) ? {display: 'none'} : {}}
            onClick={() => setNavVisible(true)}
        />
        <header style={(navVisible) ? {transform: 'translateY(0px)'} : {transform: 'translateY(-200px)'}}>
            <nav>
                <ul>
                    <li>
                        <a href="#projects" onClick={handleClick}>PROJECTS</a>
                    </li>
                    <li>
                        <a href='#about' onClick={handleClick}>ABOUT ME</a>
                    </li>
                    <li>
                        <a href='#contact' onClick={handleClick}>CONTACT</a>
                    </li>

                    {/* <li>
                        Contact + Resume
                    </li> */}

                    <li>
                        <a href="https://www.linkedin.com/in/pslang/" target="_blank" rel='noreferrer'>
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                    </li>
                    <li>
                    <a href="https://github.com/patricklang87" target="_blank" rel='noreferrer'>
                            <img src={github} alt="GitHub" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        </>
        
    )
}
