import ProjectCard from "./ProjectCard";
import {project} from "../data"
import '../styles/Projects.css';

export default function Projects() {
    return (
        <div id="projects">
            <div id="project">
                <div id="project-text">
                    <h1> My <span className="pro-text">Projects</span></h1>
                    <p> Some of my recent works: </p>
                </div>
                <div id="project-button">
                    <button> View All Projects <i className="fa-solid fa-arrow-right-long"></i> </button>
                </div>
            </div>
            <div className="project-container">
                {project.map((item) =>
                    <ProjectCard key={item.id} project={item}/>
                )}
            </div>
        </div>
    )
}