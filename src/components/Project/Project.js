import React from "react";
// import "./index.css";
import projects from "../../projects.json";
import "./index.css";

function Project() {
    return (
<div class="card">
  <img src={projects[0].mockup} alt="" />
  <h2>{projects[0].title}</h2>
  <p class="price"><a href={projects[0].githubRepo}>See the GitHub repository for the project</a></p>
  {/* <p>Some text about the jeans..</p> */}
  <p><button><a href={projects[0].deployedLink}>Learn more</a></button></p>
</div>
    );
}

export default Project;