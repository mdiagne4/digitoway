import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                            <div className="col-md-12">
                            <div className="about-desc">
                                <span className="heading-meta">About Us</span>
                                <h2 className="colorlib-heading">Qui sommes nous ?</h2>
                                <p>Ingénieur Logiciel depuis 2011, ma spécialité tourne autours des applications web. 
                                    A travers mes experiences pour de grands comptes, j'interviens principalement dans les phases de conception, 
                                    de développement, d'intégration et de déploiement de solution informatique.
                                    Aussi, je conseille et accompagne mes clients dans les phases de suivie/monitoring, 
                                    de pilotage de projet, de tests d'applications ainsi que de la maintenance applicative.
                                </p>
                                <p>Passionné de nouvelles technologies, je mets mon expertise et mon experience à votre service 
                                    pour vous accompagner dans le processus de la digitalisation de vos projets et de leur maintien en état opérationnel.
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                            <div className="services color-1">
                                <span className="icon2"><i className="icon-stack-2" /></span>
                                <h3>Développement logiciel</h3>
                            </div>
                            </div>
                            <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                            <div className="services color-2">
                                <span className="icon2"><i className="icon-display2" /></span>
                                <h3>DevOps</h3>
                            </div>
                            </div>
                            <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                            <div className="services color-3">
                                <span className="icon2"><i className="icon-data" /></span>
                                <h3>Base de données</h3>
                            </div>
                            </div>
                            <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                            <div className="services color-4">
                                <span className="icon2"><i className="icon-bulb" /></span>
                                <h3>Pilotage projet</h3>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>            
        
        )
    }
}
