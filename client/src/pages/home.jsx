import React, {Component} from 'react'
import {Element} from 'react-scroll'

class Home extends Component {
  render() {
    return (
        <div className='homePage'>
         <h1>Magness Consulting LLC</h1>
         <h2>
           Leadership/Organizational Development Consultant
         </h2>
         <Element name="missionSection"></Element>
         <p>
           <strong>Mission: </strong>
           Our mission at Magness Consulting is to engage people at all levels of your organization, while creating a high level of excellence.  We address challenges in the workplace, train and coach leaders to overcome those challenges.  At Magness consulting our mission is to serve you.  We will tell you the hard truth to help your organization grow and succeed.  
         </p>
        </div>
    )
  }
}

export default Home;
 