import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="titles">A propos de moi</h1>
      <img src="../src/assets/arrow.png" className="arrow" alt="Fleche" />
      <div className="about-description">
        <img
          src="../src/assets/Portrait.JPG"
          className="fred-pic"
          alt="fred-pic"
        />
        <p>
          "J'ai le privilège aujourd'hui de vous présenter mon travail,
          représentatif de mes premières expériences et idées de développement
          depuis ces quelques mois. En pleine reconversion, je découvre chaque
          jour un peu plus cet univers de la tech plein de challenges et de
          défis passionnants à relever. Je tiens à évoluer toujours de manière
          bienveillante et en pleine conscience qu'un état d'esprit positif et
          humain ne nous amènera que vers un enrichissement mutuel. <br />
          Bonne navigation!"
        </p>
      </div>
    </div>
  );
}

export default About;
