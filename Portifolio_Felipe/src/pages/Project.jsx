import { useEffect, useState } from "react";
import "./style/Project.css";

const FILTER_REPOS = [

  "dindin",
  "form_multstep",
  "calc_imc"
];

const STATIC_PROJECTS = [
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

];

function Repos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/7lipe7/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((repo) =>
          FILTER_REPOS.includes(repo.name)
        );
        setRepos(filtered);
      })
      .catch((err) => console.error(err));
  }, []);

  const allProjects = [...STATIC_PROJECTS, ...repos];

  return (
    <div className="project-container">
      <div className="title">
        <h2>
          Meus <span>Projetos</span>
        </h2>
      </div>
      <div className="repos-grid">
        {allProjects.map((project, index) => (
          <div className="repo-card" key={project.id || `static-${index}`}>
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
                {project.html_url.includes("github.io") ? "Acessar Site" : "Ver no GitHub"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Repos;

