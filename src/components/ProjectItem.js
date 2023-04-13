import React from "react";

function ProjectItem({ name, about, technologies, id}) {
  const techSpan = technologies.map(tech => <span key={tech}>{tech}</span>)
  return (
    <div className="project-item" key={id}>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techSpan}
      </div>
    </div>
  );
}

export default ProjectItem;
