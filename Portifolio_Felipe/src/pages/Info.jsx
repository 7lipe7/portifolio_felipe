import React from 'react'
import './Info.css'
import react from '../assets/icons8-reagir-96.png'
import php from '../assets/icons8-logo-php-96.png'
import mySql from '../assets/icons8-meu-sql-96.png'
import node from '../assets/icons8-nodejs-96.png'
import c from '../assets/icons8-c++-96.png'
import py from '../assets/icons8-python-96.png'
import prisma from '../assets/icons8-prisma-orma-96.png'
import java from '../assets/icons8-logo-java-coffee-cup-96.png'
import js from '../assets/icons8-javascript-96.png'


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
                  <img src={react} style={{ width: '50px', margin: '0 auto' }} alt="" />
                </div>


              </div>

              <div className="box-btn">
                <div className="fig">
                  <button>php</button>
                  <img src={php} style={{ width: '50px', margin: '0 auto' }} alt="" />
                </div>

              </div>
              <div className="box-btn">
                <div className="fig">
                  <button>sql</button>
                  <img src={mySql} style={{ width: '50px', margin: '0 auto' }} alt="" />
                </div>

              </div>

              <div className="box-btn">
                <div className="fig">
                  <button>javaScript</button>
                  <img src={js} style={{ width: '50px', margin: '0 auto' }} alt="" />
                </div>

              </div>

              <div className="box-btn">
                <div className="fig">
                  <button>nodeJS</button>
                  <img src={node} style={{ width: '50px', margin: '0 auto' }} alt="" />
                </div>
              </div>


              <div className="box-btn">
                <div className="fig">
                  <button>c++</button>
                  <img src={c} style={{ width: '50px', margin: '0 auto' }} alt="" />
                </div>
              </div>


              <div className="box-btn">
                <div className="fig">
                  <button>python</button>
                  <img src={py} style={{ width: '50px', margin: '0 auto' }} alt="" />
                </div>
              </div>
              <div className="box-btn">
                <div className="fig">
                  <button>prisma.js</button>
                  <img src={prisma} style={{ width: '50px', margin: '0 auto' }} alt="" />
                </div>
              </div>
              <div className="box-btn">
                <div className="fig">
                  <button>java</button>
                  <img src={java} style={{ width: '50px', margin: '0 auto' }} alt="" />
                </div>
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
