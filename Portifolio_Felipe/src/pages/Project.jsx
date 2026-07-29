import "./style/Project.css";


const PROJECTS = [
  {

    name: "lariamigurumi",
    description: "Aplicação desenvolvida para apresentar produtos artesanais no estilo amigurumi, com foco em um design visual atrativo e navegação simples. O projeto destaca habilidades em criação de interfaces modernas e organização de conteúdo para pequenos negócios.- Lari Amigurumi",
    language: "HTML/CSS/JS",
    html_url: "https://7lipe7.github.io/lariamigurumi/"
  },
  {
    name: "renata_bordados",
    description: "Projeto voltado para divulgação de trabalhos de bordado artesanal, com layout elegante e responsivo.Desenvolvido com foco em experiência do usuário, permitindo apresentar produtos de forma clara e profissional. - renata_bordados",
    language: "HTML/CSS/JS",
    html_url: "https://7lipe7.github.io/renata_bordados/"
  },
  {
    name:"calc_imc",
    description: "Calculadora de IMC (Índice de Massa Corporal) desenvolvida com HTML, CSS e JavaScript. Permite aos usuários calcular seu IMC com base em altura e peso, fornecendo uma avaliação rápida da saúde corporal.",
    language: "react/html/css/js",
    html_url: "https://calc-imc-gamma-six.vercel.app/"
  },
  {
    name: "form_multstep",
    description: "Formulário de múltiplas etapas desenvolvido com React, permitindo aos usuários preencher informações em etapas sequenciais. O projeto demonstra habilidades em gerenciamento de estado e navegação entre diferentes seções do formulário.",
    language: "react/html/css/js",
    html_url: "https://form-multstep.vercel.app/"
  },
  {
    name: "dindin",
    description: "Aplicação web desenvolvida para gerenciamento financeiro pessoal, permitindo aos usuários registrar despesas e receitas, visualizar gráficos de gastos e manter um controle eficiente de suas finanças. O projeto destaca habilidades em desenvolvimento front-end e integração com APIs para armazenamento de dados.",
    language: "react/html/css/js",
    html_url: "https://dindin-one.vercel.app/"
  },
  {
    name: "pagina de vendas do iphone 13",
    description: "Página de vendas do iPhone 13 desenvolvida com HTML, CSS e JavaScript. Permite aos usuários explorar os recursos e especificações do dispositivo, além de facilitar o processo de compra.",
    language: "html/css/js",
    html_url: "https://7lipe7.github.io/iphone/"
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
}

export default Repos;

