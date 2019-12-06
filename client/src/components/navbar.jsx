import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);

        this.state = {
          collapsed: true
        }
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        })
      }

    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">M</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                      MEET MAGNESS 
                      <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item active dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      SERVICES
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="/">LEADERSHIP COACHING</a>
                      <a className="dropdown-item" href="/">TEAM DEVELOPMENT</a>
                      <a className="dropdown-item" href="/">PROCESS IMPROVEMENT/PROBLEM SOLVING</a>
                      <a className="dropdown-item" href="/">ORGANIZATIONAL DEVELOPMENT</a>
                    </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/">MISSON</a>
                </li>
                <button type="button" className="btn btn-warning justify-content-right">CONTACT US</button>
              </ul>
            </div>
        </nav> 
    )
  }
}

export default Navbar;
