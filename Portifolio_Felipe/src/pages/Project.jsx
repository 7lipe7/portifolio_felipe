
import "./style/Project.css";

import lari1 from "../assets/img_project/lari/Captura de tela de 2026-08-04 11-16-39.png";
import lari2 from "../assets/img_project/lari/Captura de tela de 2026-08-04 11-16-53.png";
import lari3 from "../assets/img_project/lari/Captura de tela de 2026-08-04 11-17-19.png";
import lari4 from "../assets/img_project/lari/Captura de tela de 2026-08-04 11-17-29.png";

import renata1 from "../assets/img_project/renata/Captura de tela de 2026-08-04 11-26-59.png";
import renata2 from "../assets/img_project/renata/Captura de tela de 2026-08-04 11-27-09.png";
import renata3 from "../assets/img_project/renata/Captura de tela de 2026-08-04 11-27-15.png";
import renata4 from "../assets/img_project/renata/Captura de tela de 2026-08-04 11-27-21.png";

import calc1 from "../assets/img_project/calc_/Captura de tela de 2026-08-04 11-19-31.png";
import calc2 from "../assets/img_project/calc_/Captura de tela de 2026-08-04 11-19-45.png";

import form1 from "../assets/form/Captura de tela de 2026-08-04 11-21-45.png";
import form2 from "../assets/form/Captura de tela de 2026-08-04 11-22-15.png";
import form3 from "../assets/form/Captura de tela de 2026-08-04 11-22-25.png";

import dindin1 from "../assets/img_project/dindin/Captura de tela de 2026-08-04 11-24-45.png";
import dindin2 from "../assets/img_project/dindin/Captura de tela de 2026-08-04 11-24-53.png";
import dindin3 from "../assets/img_project/dindin/Captura de tela de 2026-08-04 11-25-06.png";
import dindin4 from "../assets/img_project/dindin/Captura de tela de 2026-08-04 11-25-20.png";
import dindin5 from "../assets/img_project/dindin/Captura de tela de 2026-08-04 11-25-44.png";

import iphone1 from "../assets/img_project/iphone/Captura de tela de 2026-08-04 11-26-12.png";
import iphone2 from "../assets/img_project/iphone/Captura de tela de 2026-08-04 11-26-22.png";

import quizz from "../assets/img_project/quizz/Captura de tela de 2026-08-24 15-28-20.png"
import quizz1 from "../assets/img_project/quizz/Captura de tela de 2026-08-24 15-30-15.png"
import quizz2 from "../assets/img_project/quizz/Captura de tela de 2026-08-24 15-28-43.png"
import quizz3 from "../assets/img_project/quizz/Captura de tela de 2026-08-24 15-28-36.png"

const PROJECTS = [
  {

    name: "lariamigurumi",
    description: "Aplicação desenvolvida para apresentar produtos artesanais no estilo amigurumi, com foco em um design visual atrativo e navegação simples. O projeto destaca habilidades em criação de interfaces modernas e organização de conteúdo para pequenos negócios.- Lari Amigurumi",
    language: "HTML/CSS/JS",
    html_url: "https://lariamigurumi.vercel.app/",
    images: [lari1, lari2, lari3, lari4]
  },
  {
    name: "renata_bordados",
    description: "Projeto voltado para divulgação de trabalhos de bordado artesanal, com layout elegante e responsivo.Desenvolvido com foco em experiência do usuário, permitindo apresentar produtos de forma clara e profissional. - renata_bordados",
    language: "HTML/CSS/JS",
    html_url: "https://7lipe7.github.io/renata_bordados/",
    images: [renata1, renata2, renata3, renata4]
  },

    {
    name: "dindin",
    description: "Aplicação web desenvolvida para gerenciamento financeiro pessoal, permitindo aos usuários registrar despesas e receitas, visualizar gráficos de gastos e manter um controle eficiente de suas finanças. O projeto destaca habilidades em desenvolvimento front-end e integração com APIs para armazenamento de dados.",
    language: "react/html/css/js",
    html_url: "https://dindin-one.vercel.app/",
    images: [dindin1, dindin2, dindin3, dindin4, dindin5]
  },

  {
    name: "quizz em react",
    description: "Aplicação de quiz interativo desenvolvida com React, utilizando componentização, Context API e gerenciamento de estado. O projeto possui seleção de categorias, perguntas e alternativas dinâmicas, sistema de pontuação e tela de resultado.",
    language: "React | JavaScript | Vite | CSS",
    html_url: "https://quizz-react-psi.vercel.app/",
    images: [quizz,quizz3,quizz2,quizz1 ]


  },
  {
    name: "calc_imc",
    description: "Calculadora de IMC (Índice de Massa Corporal) desenvolvida com HTML, CSS e JavaScript. Permite aos usuários calcular seu IMC com base em altura e peso, fornecendo uma avaliação rápida da saúde corporal.",
    language: "react/html/css/js",
    html_url: "https://calc-imc-gamma-six.vercel.app/",
    images: [calc1, calc2]
  },
  {
    name: "form_multstep",
    description: "Formulário de múltiplas etapas desenvolvido com React, permitindo aos usuários preencher informações em etapas sequenciais. O projeto demonstra habilidades em gerenciamento de estado e navegação entre diferentes seções do formulário.",
    language: "react/html/css/js",
    html_url: "https://form-multstep.vercel.app/",
    images: [form1, form2, form3]
  },

  {
    name: "pagina de vendas do iphone 13",
    description: "Página de vendas do iPhone 13 desenvolvida com HTML, CSS e JavaScript. Permite aos usuários explorar os recursos e especificações do dispositivo, além de facilitar o processo de compra.",
    language: "html/css/js",
    html_url: "https://7lipe7.github.io/iphone/",
    images: [iphone1, iphone2]
  }

 
  
]


function Repos() {
  return (
    <div className="project-container" id="projetos">
      <div className="title">
        <h2>
          Meus <span>Projetos </span>
        </h2>
      </div>
      <div className="repos-grid">
        {PROJECTS.map((project, index) => (
          <div className="repo-card" key={`project-${index}`}>
<div className="repo-card-header">
              <h3>{project.name}</h3>
              <span className="repo-language">
                {project.language || "N/A"}
              </span>
            </div>
            {project.images && project.images.length > 0 && (
              <div className="repo-gallery">
                <div className="repo-gallery-track">
                  {project.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${project.name} - imagem ${i + 1}`}
                      className="repo-gallery-img"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            )}
            <p className="repo-description">
              {project.description || "Sem descrição disponível"}
            </p>
            <div className="repo-card-footer">
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-link"
              >
                {project.html_url.includes("github.io") || project.html_url.includes("vercel.app") ? "Acessar Site" : "Ver no GitHub"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 1

export default Repos;

