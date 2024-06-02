/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import "./ProjectCard.css";

function ProjectCard() {
  const navigate = useNavigate();
  const { ProjectArray, projects, setProjects, apiService, user } =
    useGlobalContext();

  const handleProjectDelete = async (id) => {
    try {
      await apiService.delete(`http://localhost:3310/api/projects/${id}`);
      setProjects([...projects.filter((proj) => proj.id !== id)]);
    } catch (err) {
      console.error(err);
    }
  };

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
                {user ? (
                  <button
                    className="invisible-button"
                    aria-label="toggleFavorite"
                    type="button"
                    onClick={() => {
                      navigate(`/projet/edit/${projet.id}`);
                    }}
                  >
                    <i className="fa-regular fa-pen-to-square" />{" "}
                  </button>
                ) : null}
                {user ? (
                  <button
                    className="invisible-button"
                    aria-label="toggleFavorite"
                    type="button"
                    onClick={() => {
                      handleProjectDelete(projet.id);
                    }}
                  >
                    <i className="fa-solid fa-trash" />
                  </button>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
