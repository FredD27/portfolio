import { Link } from "react-router-dom";
import "./NavBar.css";
import { useGlobalContext } from "../../context/GlobalContext";

function NavBar() {
  const { projects } = useGlobalContext();

  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Mes Projets</Link>
          <div className="dropdown-menu">
            <ul>
              {projects.map((projet) => (
                <li key={projet.id}>
                  <Link to={`/projet/${projet.title}`}>{projet.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li>
          <Link to="/login">Se Connecter</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
