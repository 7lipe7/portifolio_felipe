import React, { useState } from 'react'
import './style/Nav.css'

import imgDowload from '../assets/icons8-baixar-32.png'

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleNavClick = (id) => {
        scrollToSection(id)
        setIsMenuOpen(false)
    }

    return (
        <nav>
            <div className="top">
                <h2>felipe</h2>
                <button 
                    className={`hamburger ${isMenuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={`btn-info ${isMenuOpen ? 'show' : ''}`}>
                    <button onClick={() => handleNavClick('sobre')}>sobre</button>
                    <button onClick={() => handleNavClick('habilidades')}>habilidades</button>
                    <button onClick={() => handleNavClick('projetos')}>projetos</button>
                    <button onClick={() => handleNavClick('contato')}>contato</button>
                </div>
                <a href="src/assets/currículo_Felipe.pdf" download className={`cv-link ${isMenuOpen ? 'show' : ''}`}>
                  <button id='Cv-download'><img src={imgDowload} alt="download" style={{width:'18px',height:'18px', marginRight:'5px'}} /> baixar cv</button>
                </a>
            </div>
        </nav>
    )
}

export default Nav
