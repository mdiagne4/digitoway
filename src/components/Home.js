import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
          
          <div>
            <section id="colorlib-hero" className="js-fullheight" data-section="home">
                <div className="flexslider js-fullheight">
                    <ul className="slides">
                    <li style={{backgroundImage: 'url(images/img_bg_1.jpg)'}}>
                        <div className="overlay" />
                        <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                            <div className="slider-text-inner js-fullheight">
                                <div className="desc">
                                <h1><br /><br /><br /><br />It's DIGITOW@Y</h1>
                                <h2>Customer focused business model change for your Digital challenges.</h2>
                                <br /><br />
                                <p><a className="btn btn-primary btn-learn"> Voir Portfolio <em className="icon-briefcase3" /></a></p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </li>
                    <li style={{backgroundImage: 'url(images/img_bg_2.jpg)'}}>
                        <div className="overlay" />
                        <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                            <div className="slider-text-inner">
                                <div className="desc">
                                <h1><br /><br /><br /><br />Software Engineer</h1>
                                <h2>Vous accompagner dans vos projets de tranformation digitale</h2>
                                <br /><br />
                                <p><a className="btn btn-primary btn-learn" href="./cv_fr.pdf" target="_blank" rel="noopener noreferrer"> Telecharger CV <em className="icon-download4" /></a></p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </li>
                    </ul>
                </div>
            </section>
          </div>
        
        )
      }
}

export default Home
