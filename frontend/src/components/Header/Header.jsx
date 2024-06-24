import CVButton from "../CVButton/CVButton";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1>
        "Bonjour, je m'appelle Frédérique Druet, <br /> je suis aspirante Analyste en Cybersécurité"
      </h1>
      <CVButton />
    </div>
  );
}

export default Header;
