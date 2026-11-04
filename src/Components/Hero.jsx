import tselot from '../assets/tselot.jpg';
import '../styles/Hero.css'
export default function Hero() {
    return (
        <div id="home" className="hero-section">
            <div>
                <img src= {tselot} alt="tselot" className='portfolio-img'/>                
            </div>
            <div id='hero-text'>
                <div id='hello'>
                <p id='hello-p'> Hello, I'm </p>
                <h1> Tselot <span className='last'>Amare</span> </h1>
                <div id='vertical'>
                    <p> Software Enginnering Student</p>
                    <div class="vertical-line"></div>
                    <p> Web Developer</p>
                </div>
                <p> I turn ideas into beautiful and functional websites,
                    <br/>
                    and I'm on a journey to explore the world of AI & ML.
                </p>
                </div>
                <div id='button'>
                    <button> <a href='#projects'> <i className="fa-solid fa-code"></i> View My Projects </a></button>
                    <button> <a href='#about'> About Me <i className="fa-solid fa-arrow-right-long"></i></a></button>
                </div>
                <div id='fonts'>
                    <a href='https://github.com/tselot67' target='_blank'><i className="fa-brands fa-github"></i></a>
                    <a href='https://www.linkedin.com/in/tselot-amare-258093348/' target='_blank'> <i className="fa-brands fa-linkedin-in"></i></a>
                    <a href='https://www.youtube.com/'><i className="fa-brands fa-youtube" target='_blank'></i> </a>
                </div>
            </div>  
        </div> 
    )
}