import '../styles/ProjectCard.css';
export default function ProjectCard({project}) {
    const {projectImg, title, description, link, linkUrl} = project;
    return (
        <div className="project-card">
            <div className='project-img'>
                <img src= {projectImg} alt={title} />
            </div>
            <div className='project-info'>
                <h3> {title} </h3>
                <p> {description} </p>
                <a href= {linkUrl} target='_blank' rel='noopener noreferrer'> {link} <i className="fa-solid fa-arrow-right-long"></i> </a>
            </div>
        </div>
    )
}