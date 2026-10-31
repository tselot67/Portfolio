import ProjectCard from "./ProjectCard";
import {project} from "../data"

export default function Projects() {
    return (
        <div>
            <div>
                <div>
                    <h1> My Projects</h1>
                    <p> Some of my recent works: </p>
                </div>
                <div>
                    <button> View All Projects <i className="fa-solid fa-arrow-right-long"></i> </button>
                </div>
            </div>
            <div>
                {project.map((item) =>
                    <ProjectCard key={item.id} project={item}/>
                )}
            </div>
        </div>
    )
}