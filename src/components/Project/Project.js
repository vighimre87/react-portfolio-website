import React from "react";
import "./index.css";

function Project(props) {
    return (
      // Code and some styling elements for card templates has been taken from https://www.quackit.com/html/html_editors/scratchpad/?example=/css/grid/examples/cards_auto-fill_align-items_center
        <article>
    <img src={props.mockup} alt={props.alt} />
    <div class="text">
      <h3>{props.title}</h3>
      <p>See the <strong><a href={props.githubRepo}>GitHub</a></strong> repository for further info on the project.</p>
      <button><a href={props.deployedLink}>See the deployed app</a></button>
    </div>
  </article>
    );
}

export default Project;