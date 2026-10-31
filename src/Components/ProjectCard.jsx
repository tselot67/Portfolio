export default function ProjectCard({project}) {
    const {projectImg, title, description, link} = project;
    return (
        <div>
            <div>
                <img src= {projectImg} alt={title} />
            </div>
            <div>
                <h3> {title} </h3>
                <p> {description} </p>
                <a href=""> {link} <i className="fa-solid fa-arrow-right-long"></i> </a>
            </div>
        </div>
    )
}