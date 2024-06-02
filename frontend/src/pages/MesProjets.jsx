import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import Projet from "../components/Projet/Projet";

function MesProjets() {
  const { ProjectArray } = useGlobalContext();
  const [projet, setProjet] = useState();
  const { title } = useParams();

  useEffect(() => {
    const selectedProjet = ProjectArray.find((p) => p.title === title);
    setProjet(selectedProjet);
  }, []);

  return (
    <div>{projet ? <Projet projet={projet} /> : <p>Projet non trouvé</p>}</div>
  );
}

export default MesProjets;
