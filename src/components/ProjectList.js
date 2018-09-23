import React from "react";
import { Link } from "react-router-dom";

import projectArray from "../projects.json";

const ProjectList = () => {
  console.log("[JSON]", projectArray);
  return (
    <section>
      <h2>All Projects</h2>

      <ul>
        {projectArray.map(oneProject => (
          <li key={oneProject.id}>
          <Link to={`/projects/${oneProject.id}`}>
          <h3>{oneProject.name}</h3>
          </Link>

            <h3>
              <p>Technologies: {oneProject.technologies} </p>
            </h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectList;
