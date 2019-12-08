import React, {Component} from 'react'
// import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {Element} from 'react-scroll'

class ProcessImp extends Component {
  render() {
    return (
        <div className='processImpPage'>
          <Element name="processSection"></Element>
          <h1>Process Improvement</h1>
          <p>
            Every organization has challenges.  Not only do we help to build teams to be critical thinkers and problem solvers, we also deep dive into challenges that may be hindering your organizations performance.  Whether your opportunity is people or process related,  we can evaluate these challenges to provide corrective actions and an appropriate plan for improvement.  
          </p>
        </div>
    )
  }
}

export default ProcessImp;
