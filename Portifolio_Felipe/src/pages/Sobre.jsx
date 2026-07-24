import React from 'react'
import './Sobre.css'
import perfil from '../assets/pessoal.jpg'
import gitHub from '../assets/icons8-github-96.png'
import linkdin from '../assets/icons8-linkedin-96.png'



const Sobre = () => {
  return (
    <div className="sobre-section">

      <div className="container">

        <p><span className="highlight-dot">.</span> disponível para contato</p>


        <h1>
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

        <p>Desenvolvedor Web & UX Design</p>

        <h4>
          Estudante de Desenvolvimento de Software Multiplataforma, com foco em
          desenvolvimento web e aplicações modernas.
        </h4>
        <div className="btn-contact">
          <button>ver projetos</button>
          <button>entrar em contato</button>
        </div>
        <hr />
        <div className="social-info">
          <div className="box">
            <p>LinkedIn</p>
            <button className='contact'>
              <img src={linkdin} alt="LinkedIn" />
            </button>

          </div>
          <div className="box">
            <p>github</p>
            <button className='contact'>
              <img src={gitHub} alt="github" />
            </button >
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