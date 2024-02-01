import React from "react";
import Header from "../components/Header/Header";
import About from "../components/A Propos/About";
import Skills from "../components/Skills/Skills";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <ProjectCard />
    </div>
  );
}

export default Home;
