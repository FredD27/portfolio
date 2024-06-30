import "./CVButton.css";

function CVButton() {
  const downloadCV = () => {
    // Créer un lien invisible
    const link = document.createElement("a");

    // Définir l'URL du fichier PDF
    link.href = "../src/assets/Alternance CV Druet.pdf";

    // Définir l'attribut de téléchargement avec le nom souhaité pour le fichier
    link.download = "CV_Frederique_Druet.pdf";

    // Ajouter le lien au document
    document.body.appendChild(link);

    // Simuler un clic sur le lien pour déclencher le téléchargement
    link.click();

    // Supprimer le lien du document
    document.body.removeChild(link);
  };
  return (
    <button className="btn-grad" type="button" onClick={downloadCV}>
      Télécharger mon CV
    </button>
  );
}

export default CVButton;
