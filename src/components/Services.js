import React, { Component } from 'react'

class Services extends Component {
    render() {
        return (
            
            <div>
                <section className="colorlib-services" data-section="services">
                    <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">What I do?</span>
                        <h2 className="colorlib-heading">Quelques Services</h2>
                        </div>
                    </div>
                    <div className="row row-pt-md">
                        <div className="col-md-4 text-center animate-box">
                        <div className="services color-1">
                            <span className="icon">
                            <i className="icon-layers2" />
                            </span>
                            <div className="desc">
                            <h3>DEV Logiciel</h3>
                            <p>Développer des applications Web avec les technos Java et Java EE
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                        <div className="services color-2">
                            <span className="icon">
                            <i className="icon-display2" />
                            </span>
                            <div className="desc">
                            <h3>DevOps</h3>
                            <p>Faciliter le build d'applications avec les outils Jenkins, Docker, K8s</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                        <div className="services color-3">
                            <span className="icon">
                            <i className="icon-data" />
                            </span>
                            <div className="desc">
                            <h3>Base de données</h3>
                            <p>Bonne connaissance des BDD relationnelles et non relationnelles</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                        <div className="services color-4">
                            <span className="icon">
                            <i className="icon-settings" />
                            </span>
                            <div className="desc">
                            <h3>Maintenance</h3>
                            <p>Expérience en Tierce Maintenance Applicative et Evolutive</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                        <div className="services color-5">
                            <span className="icon">
                            <i className="icon-eye3" />
                            </span>
                            <div className="desc">
                            <h3>Tests</h3>
                            <p>Pilotage de tests d'intégration, fonctionnelles, de performance...</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                        <div className="services color-6">
                            <span className="icon">
                            <i className="icon-bulb" />
                            </span>
                            <div className="desc">
                            <h3>Pilotage projet</h3>
                            <p> Gestion de projet en contextes Agile - SCRUM, Cycle en V...</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
            
        )
    }
}


export default Services