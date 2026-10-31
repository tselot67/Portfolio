import SkillBadge from "./SkillBadge";
import {skill} from "../data";

export default function Skills() {
    return (
        <div>
            <div>
                <h1> My Skills </h1>
                <p> Technologies and tools I work with: </p>
            </div>
            <div>
                {skill.map((item) => 
                    <SkillBadge key={item.id} skill={item}/> 
                )}
            </div>
        </div>
    )
}