import CVButton from "../CVButton/CVButton";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1>
        "Bonjour, je m'appelle Frédérique Druet, <br /> je suis en formation de
        Technicien Supérieur Systèmes et Réseaux à la Wild Code School"
      </h1>
      <CVButton />
    </div>
  );
}

export default Header;
