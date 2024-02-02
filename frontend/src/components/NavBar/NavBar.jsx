import { Link } from "react-router-dom";
import "./NavBar.css";
import { useGlobalContext } from "../../context/GlobalContext";

function NavBar() {
  const { projects, handleLogout, user } = useGlobalContext();

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
        {!user ? (
          <li>
            <Link to="/login">Connexion</Link>
          </li>
        ) : null}

        {user ? (
          <li>
            <Link to="/" onClick={handleLogout}>
              Déconnection
            </Link>
          </li>
        ) : null}
      </ul>
    </div>
  );
}

export default NavBar;
