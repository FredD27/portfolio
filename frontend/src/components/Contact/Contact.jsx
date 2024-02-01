import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="titles">Mes Contacts</h1>
      <img src="../src/assets/arrow.png" className="arrow" alt="Fleche" />
      <div className="contacts">
        <div className="one-contact">
          <div className="contact-title">
            <div className="big-icon-share">
              <i className="fa-solid fa-phone" />
            </div>
            <h2>Téléphone</h2>
          </div>
          <a href="tel:+33611475498">
            <h3>06.11.47.54.98</h3>
          </a>
        </div>
        <div className="one-contact">
          <div className="contact-title">
            <div className="big-icon-share">
              <i className="fa-regular fa-envelope" />
            </div>
            <h2>Mail</h2>
          </div>
          <a href="mailto:druetfrederique27@gmail.com">
            <h3 className="mail">druetfrederique27@gmail.com</h3>
          </a>
        </div>
        <div className="one-contact">
          <div className="contact-title">
            <div className="big-icon-share">
              <i className="fa-solid fa-link" />
            </div>
            <h2>Liens</h2>
          </div>
          <div className="linkedIn">
            <div className="icon-share">
              <i className="fa-brands fa-linkedin" />
            </div>
            <a
              href="https://www.linkedin.com/in/frederique-druet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Mon LinkedIn</h3>
            </a>
          </div>
          <div className="github">
            <div className="icon-share">
              <i className="fa-brands fa-square-github" />
            </div>
            <a
              href="https://github.com/FredD27"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Mon Github</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
