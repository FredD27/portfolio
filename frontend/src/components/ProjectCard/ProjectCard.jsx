/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// import axios from "axios";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import "./ProjectCard.css";

function ProjectCard() {
  const { ProjectArray, projects } = useGlobalContext();

  return (
    <div className="carroussel-container">
      <h1 className="titles">Mon Portefolio</h1>
      <img src="../src/assets/arrow.png" className="arrow" alt="Fleche" />
      <div className="projet-container">
        {projects.map((projet, index) => {
          const projectArrayItem = ProjectArray[index];

          if (
            !projectArrayItem ||
            !projectArrayItem.img ||
            !projectArrayItem.title
          ) {
            return null;
          }

          return (
            <div className="projet" key={projet.title}>
              <h3>{projet.title}</h3>
              <img
                className="img-projet"
                src={projectArrayItem.img}
                alt={projectArrayItem.title}
              />
              <div className="action-card">
                <Link
                  to={`/projet/${projet.title}`}
                  className="btn-projet"
                  type="button"
                >
                  Découvrir {projet.title}
                </Link>
                <img
                  src="../src/assets/trash.png"
                  className="trash-pic"
                  alt="trash-pic"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
