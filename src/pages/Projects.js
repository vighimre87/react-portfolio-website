import React from "react";
import projects from "../projects.json";
import Project from "../components/Project/Project";
import '../components/Project/index.css';

function Projects() {
    return (
        <div className="projectWrapper">
            <h2>Projects</h2>
            <main className="grid">
            {projects.map((project) => (
                <Project
                title = {project.title}
                deployedLink = {project.deployedLink}
                githubRepo = {project.githubRepo}
                mockup = {project.mockup}
                alt = {project.alt}
                />
            ))}
</main>
        </div>
    );
}

export default Projects;