import React, { Component } from 'react';
import axios from 'axios'
import ContactSuccess from './alerts/contactSuccess'
import ContactError from './alerts/contactError'

class Contact extends Component {
    constructor(props) {
        super(props);

        // this.toggleContact = this.toggleContact.bind(this);

        this.state = {
          collapsed: true,
          contactSuccess: false,
          contactError: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.resetForm = this.resetForm.bind(this)
        
    }

    toggleContact() {
        this.setState({
            collapsed: !this.state.collapsed
        })
      }

    handleSubmit(e) {
      e.preventDefault()
      const name = document.getElementById('name').value
      const email = document.getElementById('email').value
      const phone = document.getElementById('phone').value
      const message = document.getElementById('message').value
      
      console.log('MESSAGE: ', name, email, phone, message)

      if(name === '' || email === '' || message === '') {
        this.setState({
          contactError: true
        })
        return
      }

      axios({
        method: "POST", 
        // url:"http://magnessconsulting.com/send",
        url:"http://localhost:3000/send", 
        data: {
            name: name,   
            email: email,  
            phone: phone,
            message: message
        }
    }).then((response)=>{
        if (response.data.msg === 'success'){
            console.log("Message Sent."); 
            this.setState({
              contactSuccess: true
            })
            this.resetForm()
        } else if(response.data.msg === 'fail'){
          console.log("Message failed to send.")
          this.setState({
            contactError: true
          })
        }
      })
    }

    resetForm(){
      document.getElementById('form').reset();
    }

    render() {
      return (
        <div>
          <header>CONTACT US</header>

            <form id="form" className="topBefore" onSubmit={this.handleSubmit} method="POST">
        
              <input id="name" type="text" placeholder="NAME" />
              <input id="email" type="text" placeholder="E-MAIL" />
              <input id="phone" type="text" placeholder="PHONE (optional)" />
              <textarea id="message" type="text" placeholder="MESSAGE" />
              <ContactSuccess
                contactSuccess={this.state.contactSuccess}
              />
              <ContactError
                contactError={this.state.contactError}
              />
              <input id="submit" type="submit" value="GO!" />

              <i className="fa fa-envelope" aria-hidden="true"></i>

            <header>FOLLOW US</header>

            <div className="container">
              <div className="row justify-content-center">
              <div className="col-md-2 offset-md-1">
                  <i className="fa fa-facebook fa-3x" aria-hidden="true"></i>
              </div>
              <div className="col-md-2">
                  <i className="fa fa-linkedin fa-3x" aria-hidden="true"></i>
                </div>
                <div className="col-md-2">
                  <i className="fa fa-twitter fa-3x" aria-hidden="true"></i>
                </div>
                <div className="col-md-2">
                  <i className="fa fa-youtube-play fa-3x" aria-hidden="true"></i>
                </div>
                <div className="col-md-2">
                  <i className="fa fa-snapchat-ghost fa-3x" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            
          </form>
        </div>
    )
  }
}

export default Contact;
