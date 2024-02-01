import React, {
  createContext,
  useMemo,
  useContext,
  useState,
  useEffect,
} from "react";
import PropTypes from "prop-types";
import ApiService from "../services/api.services";

const GlobalContext = createContext();

function GlobalContextProvider({ children, apiService }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await apiService.get(
          "http://localhost:3310/api/projects"
        );
        setProjects(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getProjects();
  }, []);

  const ProjectArray = [
    {
      title: "GreenPoint",
      img: "../src/assets/gp-img.png",
      outils: ["TRELLO", "GITHUB", "FIGMA"],
    },
    {
      title: "L'avent-Garde",
      img: "../src/assets/avent.png",
      outils: ["GITHUB", "DOCKER"],
    },
    {
      title: "Externatic",
      img: "../src/assets/ext-img.png",
      outils: ["TRELLO", "GITHUB", "MYSQL", "FIGMA"],
    },
    {
      title: "L'idéal de L'Oréal",
      img: "../src/assets/lideal.png",
      outils: ["GITHUB", "MYSQL", "FIGMA"],
    },
  ];
  const ToolArray = [
    {
      language: "TRELLO",
    },
    {
      language: "GITHUB",
    },
    {
      language: "MYSQL",
    },
    {
      language: "FIGMA",
    },
  ];

  const values = useMemo(
    () => ({ ProjectArray, ToolArray, apiService, projects }),
    [ProjectArray, ToolArray, apiService, projects]
  );

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}

GlobalContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
  apiService: PropTypes.instanceOf(ApiService).isRequired,
};

export default GlobalContextProvider;

export const useGlobalContext = () => useContext(GlobalContext);
