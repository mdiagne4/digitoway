import React, { Component } from 'react'

class Experience extends Component {
    render() {
        return (
            <div>

                <section className="colorlib-experience" data-section="experience">
                    <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">Timeline</span>
                        <h2 className="colorlib-heading animate-box">Experiences</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <div className="timeline-centered">
                            <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                            <div className="timeline-entry-inner">
                                <div className="timeline-icon color-1">
                                <i className="icon-pen2" />
                                </div>
                                <div className="timeline-label">
                                <h2><a href="#">Ingénieur Logiciel chez Thales SIX </a> <span>2018-2020</span></h2>
                                <p>Responsable application et développeur Java Java EE pour les applications web du Ministère de la défense, et autres applications internes à Thales SIX.
                                    Mes tâches incluent des problématiques d'installation, de migration et de tests d'applications; mais aussi de formation et de mentoring de nouvel arrivant.
                                </p>
                                </div>
                            </div>
                            </article>
                            <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                            <div className="timeline-entry-inner">
                                <div className="timeline-icon color-2">
                                <i className="icon-pen2" />
                                </div>
                                <div className="timeline-label">
                                <h2><a href="#">Pilote fonctionnel et technique chez Safran I&S</a> <span>2015-2018</span></h2>
                                <p> Développeur Java Java EE pour la mise en place de nouvelles fonctionnalités et corrections de tickets.
                                    Je suis aussi intervenus sur des taches d'integrations, de qualifications et de suivie des tickets client. 
                                </p>
                                </div>
                            </div>
                            </article>
                            <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                            <div className="timeline-entry-inner">
                                <div className="timeline-icon color-3">
                                <i className="icon-pen2" />
                                </div>
                                <div className="timeline-label">
                                <h2><a href="#">Développeur Java/Java EE chez ERDF</a> <span>2015</span></h2>
                                <p>Développeur full stack sur un projet de remonté de mesures et de réalisations de statistiques.</p>
                                </div>
                            </div>
                            </article>
                            <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                            <div className="timeline-entry-inner">
                                <div className="timeline-icon color-4">
                                <i className="icon-pen2" />
                                </div>
                                <div className="timeline-label">
                                <h2><a href="#">Développeur Java/Java EE chez GFI</a> <span>2012-2015</span></h2>
                                <p>Développement d'application pour le compte du Ministère du Travail et Tierce Maintenance Applicative 
                                    autours des applications du Ministère de la Justice.</p>
                                </div>
                            </div>
                            </article>
                            <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                            <div className="timeline-entry-inner">
                                <div className="timeline-icon color-none">
                                </div>
                            </div>
                            </article>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Experience