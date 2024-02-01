import React from "react";
import PropTypes from "prop-types";
import "./Projet.css";

function Projet({ projet }) {
  return (
    <div className="page-pjt-container">
      <img className="banner-pjt" src={projet.img} alt={projet.title} />
      <div className="little-pjt-container">
        <div className="presentation">
          <h1>{projet.title}</h1>
          <p>{projet.description}</p>
        </div>
        <div className="language-pjt">
          <h2> Languages et Outils utilisés</h2>
          <img src="../src/assets/arrow.png" className="arrow" alt="Fleche" />
          <div className="bubbles-container">
            {projet.skills.map((skill) => (
              <p className="bubble-skill" key={skill.id}>
                {skill}
              </p>
            ))}
          </div>
          <div className="bubbles-container">
            {projet.outils.map((tool) => (
              <p className="bubble-tool" key={tool.id}>
                {tool}
              </p>
            ))}
          </div>
        </div>
        <div className="fonction">
          <h2>Fonctionnalités</h2>
          <img src="../src/assets/arrow.png" className="arrow" alt="Fleche" />
          <div>
            <p>{projet.fonctionnalités}</p>
            <a href={projet.link} target="_blank" rel="noopener noreferrer">
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
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    outils: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Projet;
