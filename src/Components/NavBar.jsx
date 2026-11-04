import '../styles/NavBar.css'

export default function NavBar() {
    return(
        <div id="nav-section">
            <div className="logo-text">
                <h1 id="logo"> TA </h1>
                <h1 id="logo-name"> Tselot Amare </h1>
            </div>
            <nav>
                <a href = '#home'> Home </a>
                <a href='#about'> About </a>
                <a href='#skills'> Skills</a>
                <a href='#projects'> Projects</a>
                <a href ='#contacts'> Contact</a>
            </nav>
            <div>
                <button id='talk'> 
                    <i className="fa-regular fa-envelope"></i>
                    <p> Let's Talk </p> 
                </button> 
            </div>
        </div>
    )
}