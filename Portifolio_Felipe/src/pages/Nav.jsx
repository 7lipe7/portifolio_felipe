import React from 'react'
import './style/Nav.css'

import imgDowload from '../assets/icons8-baixar-32.png'
const Nav = () => {
    return (
        <nav>
            <div className="top">
                <h2>felipe</h2>
                <div className="btn-info">
                    <button>sobre</button>
                    <button>habilidades</button>
                    <button>projetos</button>
                    <button>contato</button>
                </div>
                <button id='Cv-download'><img src={imgDowload} alt="download" style={{width:'18px',height:'18px', marginRight:'5px'}} /> cv</button>
            </div>
        </nav>
    )
}

export default Nav
