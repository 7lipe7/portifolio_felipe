import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import './style/Sobre.css'
import perfil from '../assets/pessoal.jpg'
import gitHub from '../assets/icons8-github-96.png'
import linkdin from '../assets/icons8-linkedin-96.png'

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const Sobre = () => {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
  strings: [
  'Desenvolvedor Web & UX Design',
  'Desenvolvedor Front-end React',
  'Desenvolvedor Full Stack',
  'Desenvolvedor JavaScript',
  'Desenvolvedor TypeScript',
  'Criando interfaces modernas',
  'Construindo aplicações web escaláveis',
  'Apaixonado por tecnologia',
  'Transformando ideias em soluções digitais',
  'Estudante de Desenvolvimento de Software',
  'React | Node.js | PHP',
  'Explorando novas tecnologias',
  'Focado em experiências digitais',
  'Desenvolvendo projetos inovadores',
],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    })

    return () => {
      typed.destroy()
    }
  }, [])
  return (
    <div className="sobre-section" id="sobre">


      <div className="container">

        <p><span className="highlight-dot">.</span> disponível para contato</p>


<h1 className="name-fade-slide">
          Felipe{" "}
          <span
            style={{
              background: "linear-gradient(90deg, rgb(255, 225, 0), orange)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Santana
          </span>{" "}
          Lopes
        </h1>

        <p className="typed-title">
          <span ref={typedRef}></span>
        </p>

<h4 className="name-fade-slide delay-1">
          Estudante de Desenvolvimento de Software Multiplataforma, com foco em
          desenvolvimento web e aplicações modernas.
        </h4>
        <div className="btn-contact">
<button type="button" onClick={() => scrollToSection('projetos')}>ver projetos</button>
          <button type="button" onClick={() => scrollToSection('contato')}>entrar em contato</button>
        </div>
        <hr />
        <div className="social-info">
          <div className="box">
            <p>LinkedIn</p>
            <a href="https://www.linkedin.com/in/felipe-santana-lopes-76ba77244/" target="_blank" rel="noopener noreferrer">
<button type="button" className='contact'>
                <img src={linkdin} alt="LinkedIn" />
              </button>
            </a>
          </div>
          <div className="box">
            <p>github</p>
            <a href="https://github.com/7lipe7" target="_blank" rel="noopener noreferrer">
<button type="button" className='contact'>
                <img src={gitHub} alt="github" />
              </button>
            </a>
          </div>
        </div>

      </div>

      <div className="img">
        <img className="perfil-img" src={perfil} alt="Foto de perfil de Felipe Santana Lopes" />
      </div>



    </div>
  )
}

export default Sobre