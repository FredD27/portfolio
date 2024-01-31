import React, { createContext, useMemo, useContext } from "react";
import PropTypes from "prop-types";
import ApiService from "../services/api.services";

const GlobalContext = createContext();

function GlobalContextProvider({ children, apiService }) {
  const ProjectArray = [
    {
      title: "GreenPoint",
      img: "../src/assets/gp-img.png",
      description:
        "Dans le cadre de mon projet 2 de mon bootcamp à la Wild Code School,  l'objectif principal  était de consommer une API. Nous avons souhaité aborder le problème de l'écologie. Nous avons donc imaginé un site qui permettrait de calculer l'empreinte carbone d'un utilisateur. Suivant son score final, il remporte un certain nombre de GreenPoint, qu'il va pouvoir échanger contre des récompenses telles qu'un bon de réduction sur trajet Blablacar, ou encore sur un abonnement de transport en commun de la région comme TBM. Nous souhaitions valoriser les comportements responsables et encourager ceux qui ne le sont pas encore!",
      link: "https://github.com/WildCodeSchool/2023-09-JS-BDX-P2-one-team-one-dream",
      skills: ["HTML", "CSS", "JS", "REACT", "GIT", "AGILE"],
      outils: ["TRELLO", "GITHUB", "FIGMA"],
      fonctionnalités:
        "Avec un questionnaire sur nos comportements quotidiens, comme l'utilisation de la voiture ou des transport en commun, sa consommation d'électricité ou de viande rouge, nous pouvons communiquer ces réponses à l'API CarbonInterface qui nous renvoie directement l'empreinte carbone relative à ces réponses en Kg carbone. Nous convertissons ces données en Kg de CO2 et informons ensuite l'utilisateur de son bilan carbone. Notre système de point en fonction de ce bilan permet à l'utilisateur d'en tirer une certaine valorisation concrète. Nous souhaitons en version 2, pouvoir nous rapprocher des institutions administratives afin de sécuriser ces données et permettre à l'utilisateur un véritable suivi et récompenses dans un cadre contrôlé et sécurisé.",
    },
    {
      title: "L'avent-Garde",
      img: "../src/assets/avent.png",
      description:
        "Dans le cadre de mon premier Hackathon de mon bootcamp à la Wild Code School, nous avons développé un calendrier de l'avent de Noël. L'occasion à chaque petite boîte ouverte de découvrir une idée recette, activité ou encore idée cadeau ou film de Noël! Pour ce projet, nous travaillé avec les autres classes de la formation, classe PHP et la classe Data Analyst. Le but étant de coordonner nos compétences afin de concevoir un site viable et complet en 48h. La communication et l'entre-aide ont été les clés de ce projet collectif, épanouissant et abouti.",
      link: "https://github.com/WildCodeSchool/2023-09-bordeaux-hackathon-Marre_a_thon",
      skills: ["HTML", "CSS", "JS", "REACT", "GIT", "DOCKER", "AGILE"],
      outils: ["GITHUB"],
      fonctionnalités:
        "Les data analysts se sont chargés de la récolte de données comme des idées cadeaux, ou encore des films de Noël ainsi de la construction de la base de données. Les étudiants PHP se sont quant à eux occupés du lien backend/frontend. Pour notre part, en tant qu'étudiant JavaScript/React, nous avons donc récupérer les données de cette API et avons imaginé, construit et rendu fonctionnelle toute l'interface utilisateur, avec un calendier de l'avent interactif. Les cadeaux sont générés de manière aléatoire afin que chaque calendrier propose des cadeaux différents. La découverte et l'utilisation de Docker nous a permis de relier tout notre travail de manière très efficace.",
    },
    {
      title: "Externatic",
      img: "../src/assets/ext-img.png",
      description:
        "Dans le cadre de mon projet final de mon bootcamp à la Wild Code School, nous avions pour objectif de traiter des CV d'utilisateurs recherchant un emploi et de les mettre en relation avec des offres leur correspondant suivant leurs compétences, leur exigences salariales ou encore le type de contrat.",
      link: "https://github.com/WildCodeSchool/2023-09-JS-BDX-P3-La_Rive_Droite",
      skills: ["HTML", "CSS", "JS", "REACT", "GIT", "SQL", "EXPRESS", "AGILE"],
      outils: ["TRELLO", "GITHUB", "MYSQL", "FIGMA"],
      fonctionnalités:
        "Ce projet, qui a duré 2 mois, nous a permis de concevoir un site fullStack. React et Javascript, nous ont permis la construction du frontend de manière dynamique et organisée afin que les matchs CV/offre, et ajout d'utilisateur ou d'offre s'implémentent très facilement à notre interface utilisateur ou administrateur. Nous avons construit notre propre API avec Express, avec lequel nous avons aussi rajouté des performances en matière de sécurité et d'authentification. Notre base de données relationnelle a été crée avec MySQL 2 qui nous a permis d'intégrer parfaitement notre modèle MVC. Ce projet complet m'a permis d'aborder toujours plus de facettes de développement d'un site et de continuer à apprendre et à aller encore plus loin dans la compréhension et l'expertise que demande ce métier.",
    },
    {
      title: "L'idéal de L'Oréal",
      img: "../src/assets/lideal.png",
      description:
        "Dans le cadre du hackathon national de la Wild Code School, qui a duré 3 jours, nous avons du répondre à l'appel de l'Oréal où comment l'IA peut répondre aux besoins de nos clients. Nous avons donc développé un site mettant en relation les clients de l'Oréal avec les revendeurs locaux de l'Oréal également comme les coiffeurs ou encore les pharmacies. Le but étant de rentrer dans la démarche éco-responsable de notre client, pour favoriser la réduction de l'empreinte carbone. Nous avons imaginé un système aussi de fidélisation afin l'Oréal ainsi que ses clients s'en retrouvent favorisés.",
      link: "https://github.com/orgs/WildCodeSchool/teams/lideal",
      skills: ["HTML", "CSS", "JS", "REACT", "GIT", "SQL", "EXPRESS"],
      outils: ["GITHUB", "MYSQL", "FIGMA"],
      fonctionnalités:
        "Notre projet de développement web représente une fusion harmonieuse entre l'expertise des développeurs web et celle des data analysts. En étroite collaboration, nous avons conçu une base de données robuste et optimisée. La sécurité est au cœur de notre architecture, avec une authentification complète assurant la confidentialité des informations. De l'autre côté, le frontend a été minutieusement conçu pour offrir une expérience utilisateur intuitive et esthétique. Nos efforts conjoints ont abouti à un produit final élégant et menant à une approche plus green et responsable de la consommation.",
    },
  ];
  const SkillArray = [
    {
      language: "HTML",
    },
    {
      language: "CSS",
    },
    {
      language: "JS",
    },
    {
      language: "REACT",
    },
    {
      language: "NODE JS",
    },
    {
      language: "EXPRESS",
    },
    {
      language: "GIT",
    },
    {
      language: "SQL",
    },
    {
      language: "AGILE",
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
    () => ({ ProjectArray, SkillArray, ToolArray, apiService }),
    [ProjectArray, SkillArray, ToolArray, apiService]
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
