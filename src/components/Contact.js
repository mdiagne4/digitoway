import React, { Component } from 'react'
import axios from 'axios'

export class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          object:'',
          message: ''
        }
    }


    handleSubmit(e){
      console.log("submitted")
      e.preventDefault();
      axios({
        method: "POST", 
        url:"http://localhost:3002/send", 
        data:  this.state
      }).then((response)=>{
        if (response.data.status === 'success'){
          alert("Message envoyé avec succès."); 
          this.resetForm()
        }else if(response.data.status === 'fail'){
          alert("Echec envoi de votre message.")
        }
      })
    }

    resetForm(){
      this.setState({name: '', email: '', object: '', message: ''})
    }

    render() {
        return (

            <div>
                <section className="colorlib-contact" data-section="contact">
                    <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">Get in Touch</span>
                        <h2 className="colorlib-heading">Une question, une suggestion </h2>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-8 col-md-push-1">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST" action>
                                <div className="form-group">
                                <input type="text" className="form-control" id="name" value={this.state.name} required minlength="3" onChange={this.onNameChange.bind(this)} placeholder="Nom" />
                                </div>
                                <div className="form-group">
                                <input type="text" className="form-control" id="email" value={this.state.email} required pattern="[^@\s]+@[^@\s]+\.[^@\s]+" onChange={this.onEmailChange.bind(this)} placeholder="Adresse mail" />
                                </div>
                                <div className="form-group">
                                <input type="text" className="form-control" id="object" value={this.state.object} onChange={this.onObjectChange.bind(this)}placeholder="Objet" />
                                </div>
                                <div className="form-group">
                                <textarea name id="message" cols={30} rows={7} value={this.state.message} required minlength="10" onChange={this.onMessageChange.bind(this)} className="form-control" placeholder="Message" />
                                </div>
                                <div className="form-group">
                                <input type="submit" className="btn btn-primary btn-send-message" defaultValue="Envoyer" />
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
            
        )
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    
    onObjectChange(event) {
      this.setState({object: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

}

export default Contact
