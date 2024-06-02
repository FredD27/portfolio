import React, {
  createContext,
  useMemo,
  useContext,
  useState,
  useEffect,
} from "react";
import PropTypes from "prop-types";
import { useLoaderData, useNavigate } from "react-router-dom";
import ApiService from "../services/api.services";

const GlobalContext = createContext();

function GlobalContextProvider({ children, apiService }) {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({
    title: "",
    description: "",
    fonction: "",
    url: "",
  });
  const givenData = useLoaderData();
  const navigate = useNavigate();
  // const { title } = useParams();

  const [user, setUser] = useState(givenData?.preloadUser?.data);

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    try {
      const data = await apiService.post(
        "http://localhost:3310/api/login",
        formValue
      );
      localStorage.setItem("token", data.token);
      apiService.setToken(data.token);
      const result = await apiService.get("http://localhost:3310/api/users/me");
      alert(`Content de vous revoir ${result.data.name}`);
      setUser(result.data);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      console.error(err);
      alert("Erreur de connexion. Vérifiez vos identifiants.");
    }
    return null;
  };

  const handleLogout = () => {
    localStorage.setItem("token", null);
    apiService.setToken(null);
    setUser(null);
    alert(`Déconnexion réussie`);
    return navigate("/");
  };

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

  useEffect(() => {
    const getProject = async () => {
      try {
        // const response = await apiService.get(
        //   `http://localhost:3310/api/projects/${title}`
        // );
        // setProject(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getProject();
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
    {
      title: "OMG",
      img: "../src/assets/gp-img.png",
      outils: ["TRELLO", "GITHUB", "FIGMA"],
    },
    {
      title: "L'hallu",
      img: "../src/assets/gp-img.png",
      outils: ["TRELLO", "GITHUB", "FIGMA"],
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
    () => ({
      ProjectArray,
      ToolArray,
      apiService,
      projects,
      setProjects,
      user,
      setFormValue,
      formValue,
      login,
      handleLogout,
      project,
      setProject,
    }),
    [ProjectArray, ToolArray, apiService, projects, user, formValue, project]
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
