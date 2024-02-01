import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import "./ProjectCard.css";

function ProjectCard() {
  const { ProjectArray } = useGlobalContext();

  return (
    <div className="carroussel-container">
      <h1 className="titles">Mon Portefolio</h1>
      <img src="../src/assets/arrow.png" className="arrow" alt="Fleche" />
      <div className="projet-container">
        {ProjectArray.map((projet) => {
          return (
            <div className="projet" key={projet.title}>
              <h3>{projet.title}</h3>
              <img className="img-projet" src={projet.img} alt={projet.title} />
              <div>
                <Link
                  to={`/projet/${projet.title}`}
                  className="btn-projet"
                  type="button"
                >
                  Découvrir {projet.title}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
