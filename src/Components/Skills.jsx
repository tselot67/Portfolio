import SkillCard from "./SkillCard";
import {skill} from "../data";
import '../styles/Skills.css';

export default function Skills() {
    return (
        <div id="skills">
            <div id="skill">
                <h1> My <span className="skill-text"> Skills </span> </h1>
                <p className="skills-description"> Technologies and tools I work with: </p>
            </div>
            <div id="skills-container">
                {skill.map((item) => 
                    <SkillCard key={item.id} skill={item}/> 
                )}
            </div>
        </div>
    )
}