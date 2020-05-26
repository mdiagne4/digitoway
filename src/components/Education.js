import React, { Component } from 'react'

class Education extends Component {
    render() {
        return (

            <div>
                <section className="colorlib-education" data-section="education">
                    <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">Education</span>
                        <h2 className="colorlib-heading animate-box">Formations</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                        <div className="fancy-collapse-panel">
                            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Master Informatisation et Communication Homme Machine
                                    </a>
                                </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                <div className="panel-body">
                                    <div className="row">
                                    <div className="col-md-6">
                                        <p>Master 2 Informatisation et Communication Homme-Machine à l'ISTV Institut Supérieur et Technologique de Valenciennes - FRANCE</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingTwo">
                                <h4 className="panel-title">
                                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Licence Informatique Industrielle
                                    </a>
                                </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                <div className="panel-body">
                                    <p>Licence Informatique Industrielle à l'ISTV Institut Supérieur et Technologique de Valenciennes - FRANCE</p>
                                </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingThree">
                                <h4 className="panel-title">
                                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">DEUG Physique et Modélisation
                                    </a>
                                </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                <div className="panel-body">
                                    <p>DEUG Physique et Modélisation et admission au Concours Commun Polytechnique à l’Université de Bordeaux 1 - FRANCE</p>	
                                </div>
                                </div>
                            </div>
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

export default Education 