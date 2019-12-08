import React, {Component} from 'react'
// import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {Element} from 'react-scroll'

class TeamDev extends Component {
  render() {
    return (
        <div className='teamDevPage'>
          <Element name="teamSection"></Element>
          <h1>Team Development</h1>
          <p>
            A cohesive high performing team is the most valuable asset an organization can have, which can lead to exceptional growth for your organization.  Our goal is to train teams to perform to their full potential.  We develop programs that will improve collaboration and efficiency in your organization.  We help to build and structure long lasting teams through training and developing talent in your organization.  
          </p>
        </div>
    )
  }
}

export default TeamDev;
