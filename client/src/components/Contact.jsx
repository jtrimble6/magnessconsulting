import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);

        // this.toggleContact = this.toggleContact.bind(this);

        this.state = {
          collapsed: true
        }
    }

    toggleContact() {
        this.setState({
            collapsed: !this.state.collapsed
        })
      }

    render() {
      return (
        <div>
          <header>CONTACT US</header>

            <form id="form" className="topBefore">
        
              <input id="name" type="text" placeholder="NAME" />
              <input id="email" type="text" placeholder="E-MAIL" />
              <textarea id="message" type="text" placeholder="MESSAGE" />
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
