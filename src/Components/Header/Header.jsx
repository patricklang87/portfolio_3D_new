import React, {useState, useEffect} from 'react';
import { AiFillCaretUp } from 'react-icons/ai';
import './Header.css';
import hamburger from '../../assets/images/Hamburger_icon.png';
import linkedin from '../../assets/logos/In-Blue-40@2x.png';
import github from '../../assets/logos/GitHub-Mark-64px.png'

export default function Header() {
    const [y, setY] = useState(window.scrollY);

    const handleScroll = (e) => {
        const window = e.currentTarget;
        setY(window.scrollY);

    }

    useEffect(() => {
        window.addEventListener("scroll", (e) => handleScroll(e));
      
        return () => { // return a cleanup function to unregister our function since its gonna run multiple times
          window.removeEventListener("scroll", (e) => handleScroll(e));
        };
      }, [y]);

      const handleClick = () => {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          })
      }

    return (
        <>
        {(y >= 100) && <AiFillCaretUp size="40px" onClick={handleClick} className="scrollToTop" />}      
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="#projects">PROJECTS</a>
                    </li>
                    <li>
                        <a href='#about'>ABOUT</a>
                    </li>
                    <li>
                        <a href='#contact'>CONTACT</a>
                    </li>

                    <div className="externalLinks">
                        <ul>
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
                    </div>
                </ul>
            </nav>
        </header>
        </>
        
    )
}
