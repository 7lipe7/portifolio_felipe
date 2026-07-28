import React from 'react'
import './style/Nav.css'

import imgDowload from '../assets/icons8-baixar-32.png'

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const Nav = () => {
    return (
        <nav>
            <div className="top">
                <h2>felipe</h2>
                <div className="btn-info">
                    <button onClick={() => scrollToSection('sobre')}>sobre</button>
                    <button onClick={() => scrollToSection('habilidades')}>habilidades</button>
                    <button onClick={() => scrollToSection('projetos')}>projetos</button>
                    <button onClick={() => scrollToSection('contato')}>contato</button>
                </div>
                <a href="/cv-felipe-santana.pdf" download>
                  <button id='Cv-download'><img src={imgDowload} alt="download" style={{width:'18px',height:'18px', marginRight:'5px'}} /> cv</button>
                </a>
            </div>
        </nav>
    )
}

export default Nav
