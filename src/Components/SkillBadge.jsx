export default function SkillBadge({skill}) {
    const {programImg, tech} = skill;
    return (
        <div>
            {programImg}
            <h3>{tech}</h3> 
        </div>
    )
}