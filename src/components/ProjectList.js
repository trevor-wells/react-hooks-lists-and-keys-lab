import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectos = projects.map(project => ProjectItem(project))
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectos}
      </div>
    </div>
  );
}

export default ProjectList;
