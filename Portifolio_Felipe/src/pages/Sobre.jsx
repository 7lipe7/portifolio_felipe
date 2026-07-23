import React from 'react'
import './Sobre.css'
import perfil from '../assets/pessoal.jpg'

const Sobre = () => {
  return (
    <div className="sobre-section">

      <div className="container">
       
        <p><span style={{color:'orange',fontSize:'5rem'}}>.</span> disponível para contato</p>
        

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
            <button>entar em contato</button>
       </div>
       <div className="style">
        
       </div>
      </div>
       
      <div className="img">
        <img src={perfil} alt="Foto de perfil de Felipe Santana Lopes" />
      </div>

    </div>
  )
}

export default Sobre