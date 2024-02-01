import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import "./Skills.css";

function Skills() {
  const { ToolArray, apiService } = useGlobalContext();
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getSkills = async () => {
      try {
        const response = await apiService.get(
          "http://localhost:3310/api/skills"
        );
        setSkills(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getSkills();
  }, []);

  return (
    <div>
      <div className="skills-container">
        <h1 className="titles">Mes Compétences</h1>
        <img src="../src/assets/arrow.png" className="arrow" alt="Fleche" />
        <div className="bubbles-container">
          {skills.map((skill) => {
            return (
              <div key={skill.name}>
                <p className="bubble-skill">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="tools-container">
        <h1 className="titles">Outils Maitrisés</h1>
        <img src="../src/assets/arrow.png" className="arrow" alt="Fleche" />
        <div className="bubbles-container">
          {ToolArray.map((tool) => {
            return (
              <div key={tool.language}>
                <p className="bubble-tool">{tool.language}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
