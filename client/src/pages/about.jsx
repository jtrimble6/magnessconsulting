import React, {Component} from 'react'


class About extends Component {
  render() {
    return (
        <div className='aboutPage'>
         <h1>About</h1>
         <h5>Shane Magness</h5>
         <h5>Doctor of Management in Organizational Leadership</h5>
         <img src={require('../assets/css/images/magnessHeadshot.jpg')} alt='Shane Magness'></img>
         <p>
            <strong>Service: </strong>Leadership and Organizational Development 
         </p>
         <p>
            <strong>Industries: </strong>Specialize in Professional Services and the Manufacturing Industry
         </p>
         <p>
            <strong>Skills: </strong>Having a military and manufacturing background in a fortune 500 company, I have learned to build successful teams, solve hard-hitting problems, and train leaders to perform at high levels.  I help leaders and teams to reach their full potential.   My purpose as a consultant is to help winners win more, and to help ambitus people move to the next level of their leadership journey.   I enjoy helping teams become more productive, better problem solvers, and actively perform to their full potential.   “Be the leader that subordinates do not want to disappoint.”  This is how I have explained good leadership for the last ten years.  
         </p>
        </div>
    )
  }
}

export default About;
