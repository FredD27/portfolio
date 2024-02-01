import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Projet.css";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";

function Projet({ projet }) {
  const { apiService } = useGlobalContext();
  const { title } = useParams();

  const [project, setProject] = useState({});

  useEffect(() => {
    const getProject = async () => {
      try {
        const response = await apiService.get(
          `http://localhost:3310/api/projects/${title}`
        );
        setProject(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getProject();
  }, [title]);

  return (
    <div className="page-pjt-container">
      <img className="banner-pjt" src={projet.img} alt={project.title} />
      <div className="little-pjt-container">
        <div className="presentation">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
        <div className="language-pjt">
          <h2> Languages et Outils utilisés</h2>
          <img src="../src/assets/arrow.png" className="arrow" alt="Fleche" />
          <div className="bubbles-container">
            {project.skills &&
              project.skills.split(",").map((skill) => (
                <p className="bubble-skill" key={skill.id}>
                  {skill}
                </p>
              ))}
          </div>
          <div className="bubbles-container">
            {projet.outils.map((tool) => (
              <p className="bubble-tool" key={tool.name}>
                {tool}
              </p>
            ))}
          </div>
        </div>
        <div className="fonction">
          <h2>Fonctionnalités</h2>
          <img src="../src/assets/arrow.png" className="arrow" alt="Fleche" />
          <div>
            <p>{project.fonction}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Voir sur GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Projet.propTypes = {
  projet: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fonctionnalités: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
    outils: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Projet;
