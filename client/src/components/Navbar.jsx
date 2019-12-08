import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
// import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.scrollToSection = this.scrollToSection.bind(this);

        this.state = {
          collapsed: true
        }
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        })
      }
    
    scrollToSection = (e) => {
      e.preventDefault()
      let target = e.target
      let targetName = target.getAttribute('data-name')
      const scroller = Scroll.scroller;
      scroller.scrollTo(targetName, {
        duration: 1000,
        delay: 50,
        smooth: true,
        // containerId: 'ContainerElementID',
        offset: 0, // Scrolls to element + 50 pixels down the page
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
                    <a className="nav-link" onClick={this.scrollToSection} data-name='aboutSection'>
                      MEET MAGNESS 
                      <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item active dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      SERVICES
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" onClick={this.scrollToSection} data-name='leadershipSection'>LEADERSHIP COACHING</a>
                      <a className="dropdown-item" onClick={this.scrollToSection} data-name='teamSection'>TEAM DEVELOPMENT</a>
                      <a className="dropdown-item" onClick={this.scrollToSection} data-name='processSection'>PROCESS IMPROVEMENT/PROBLEM SOLVING</a>
                      <a className="dropdown-item" onClick={this.scrollToSection} data-name='orgSection'>ORGANIZATIONAL DEVELOPMENT</a>
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
