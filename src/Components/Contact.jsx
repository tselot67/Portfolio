export default function Contact() {
    return (
        <div>
            <div>
                <h1> Get In Touch </h1>
                <p> Let's build something amazing together!</p>
                <div>
                    <i className="fa-regular fa-envelope"></i>
                    <p>amaretselot@gmail.com</p>
                </div>
                <div>
                    <i class="fa-solid fa-location-dot"></i>
                    <p> Addis Ababa, Ethiopia </p>
                </div>
                <div>
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-youtube"></i> 
                </div>
            </div>
            <div>
                <input type="text" id="name" placeholder="Your Name"/>
                <input type="email" id="email" placeholder="Your Email"/>
                <input type="text" id="message" placeholder="Your Message"/>
                <button> <i class="fa-solid fa-paper-plane"></i> Send Message </button>
            </div>
        </div>
    )
}