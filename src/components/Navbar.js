import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        
        return (

            <div>
                <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
                <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
                <div className="text-center">
                    <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
                    <h1 id="colorlib-logo"><a href="index.html">Mouhamadou DIAGNE</a></h1>
                    <span className="position"><a href="#"> </a>Software Engineer - CEO & Founder of <b>DIGITOWAY</b></span>
                </div>
                <div>
                <nav id="colorlib-main-menu" role="navigation" className="navbar">
                    <div id="navbar" className="collapse">
                    <ul>
                        <li className="active"><a href="#" data-nav-section="home">Accueil</a></li>
                        <li><a href="#" data-nav-section="about">Profil</a></li>
                        <li><a href="#" data-nav-section="services">Services</a></li>
                        <li><a href="#" data-nav-section="skills">Compétences</a></li>
                        <li><a href="#" data-nav-section="education">Formations</a></li>
                        <li><a href="#" data-nav-section="experience">Experiences</a></li>
                        <li><a href="#" data-nav-section="contact">Contact</a></li>
                    </ul>
                    </div>
                </nav>
                </div>
                <br />
                <div className="colorlib-footer">
                    <p><small>© Copyright © All rights reserved | Designed by DIGITOWAY</small></p>
                    <ul>
                    <li><a href=""><i className="icon-facebook2" /></a></li>
                    <li><a href="https://twitter.com/digitoway/" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                    <li><a href="https://www.linkedin.com/in/mouhamadou-diagne-44469719b/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                    </ul>
                </div>
                </aside>
            </div>

        )
    }
}
 
export default Navbar