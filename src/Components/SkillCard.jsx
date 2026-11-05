import '../styles/SkillCard.css';

export default function SkillBadge({skill}) {
    const {programImg, tech} = skill;
    return (
        <div id='skill-card'>
            <span className='skill-icon'>{programImg}</span>
            <h3>{tech}</h3> 
        </div>
    )
}