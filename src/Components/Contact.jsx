import '../styles/Contact.css';
export default function Contact() {
    return (
        <div id='contacts'>
            <div id='touch'>
                <h1> Get <span className='get'> In Touch </span></h1>
                <p className='contact-para'> Let's build something amazing together!</p>
                <div className='contact'>
                    <i className="fa-regular fa-envelope"></i>
                    <p>amaretselot@gmail.com</p>
                </div>
                <div className='contact'>
                    <i className="fa-solid fa-location-dot"></i>
                    <p> Addis Ababa, Ethiopia </p>
                </div>
                <div id='contact-icons'>
                    <a href='https://github.com/tselot67' target='_blank'><i className="fa-brands fa-github"></i></a>
                    <a href='https://www.linkedin.com/in/tselot-amare-258093348/' target='_blank'> <i className="fa-brands fa-linkedin-in"></i></a>
                    <a href='https://www.youtube.com/'> <i className="fa-brands fa-youtube"></i></a>  
                </div>
            </div>
            <div id='verticalline'></div>
            <div id='contact-input'>
                <input type="text" id="name" placeholder="Your Name"/>
                <input type="email" id="email" placeholder="Your Email"/>
                <textarea type="text" id="message" placeholder="Your Message"></textarea>                
                <button> <i className="fa-solid fa-paper-plane"></i> Send Message </button>
            </div>
        </div>
    )
}