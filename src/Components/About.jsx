import code from '../assets/code.jpg'
import '../styles/About.css'
export default function About() {
    return (
        <div id="about">
                <img src={code} alt='code'/>
            <div id='about-text'>
                <h1> About <span className='me'> Me </span></h1>
                <p>I'm Tselot Amare, a second-year student at 
                    Addis Ababa University<br/> with a passion for software
                    Enginnering and technology. I enjoy<br/> building websites,
                    solving problems, and exploring Artificial Intelligence<br/> and
                    Machine Learning. I'm continuously learning, <br/>developing my skills,
                    and turning creative ideas into meaningful projects.<br/><br/>
                    My goal is to become a skilled Software and AI Engineer. 
                </p>
            </div>
        </div>
    )
}