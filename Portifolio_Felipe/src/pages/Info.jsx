import React from 'react'
import './Info.css'
import react from '../assets/icons8-reagir-96.png'

const Info = () => {
  return (
    <section className="info">
      <div className="containerr">

        <h4 className="section-title">Sobre mim</h4>

        <div className="content-wrapper">
          <div className="apresent">
            <h2>
              Transformo ideias em{" "}
              <span className="highlight">experiências</span> digitais
            </h2>
            <hr />
            <div className="btn-tec">
              <div className="box-btn">
                <div className="fig">
                    <button>React</button>
                  <img src={react } style={{width:'50px', margin:'0 auto'}} alt="" />
                </div>
              
                
              </div>
              <div className="box-btn">
                <button>PHP</button>
              </div>
              <div className="box-btn">
                <button>MySQL</button>
              </div>
              <div className="box-btn">
                <button>Figma</button>
              </div>
              <div className="box-btn">
                <button>Node.js</button>
              </div>
              <div className="box-btn">
                <button>c++</button>
              </div>
                 <div className="box-btn">
                <button>pyhton</button>
              </div>
              <div className="box-btn">
                <button>prisma</button>
              </div>
              <div className="box-btn">
                <button>java</button>
              </div>



            </div>
            


          </div>
          

          <div className="text">
            <h2>Quem sou eu</h2>

            <p>
              Sou desenvolvedor apaixonado por tecnologia e criação de soluções web modernas.
              Tenho experiência no desenvolvimento de aplicações utilizando React e TypeScript,
              criando interfaces dinâmicas, responsivas e com foco na melhor experiência do usuário.
            </p>

            <p>
              No back-end, trabalho com Node.js e PHP, desenvolvendo APIs e sistemas robustos,
              sempre buscando performance e organização de código. Também possuo conhecimento
              em bancos de dados como MySQL, garantindo uma boa estrutura e eficiência no armazenamento de dados.
            </p>

            <p>
              Além disso, utilizo o Figma para prototipação e design de interfaces, o que me permite
              transformar ideias em projetos bem estruturados antes mesmo da codificação.
            </p>

            <p>
              Estou sempre em busca de evolução, aprendendo novas tecnologias e aprimorando minhas
              habilidades para entregar projetos cada vez melhores.
            </p>




          </div>
        </div>

      </div>
    </section>
  )
}

export default Info
