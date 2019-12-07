import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import './Reset.css';
import './App.css';
import './assets/css/style.css'
import './assets/css/stylecustom.css'

import Home from './pages/home'
import About from './pages/about'
import LeadershipCoaching from './pages/leadershipCoaching'
import OrgDev from './pages/orgDev'
import TeamDev from './pages/teamDev'
import ProcessImp from './pages/processImp'

class App extends Component {
  state = {
      data: 'You are NOT connected to the server'
    };
  
    componentDidMount() {
        // Call our fetch function below once the component mounts
      this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => {
          console.log(err)
          this.setState({ data: 'You are NOT connected to the server' })
        });
    }
      // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
      const response = await fetch('/express_backend');
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
    };
  
    render() {
      return (
        <div className='wrapper'>
          <Navbar />
          <Home />
          <About />
          <LeadershipCoaching />
          <OrgDev />
          <TeamDev />
          <ProcessImp />
          {/* <BrowserRouter>
            <Switch>
              <Route path='/' component={Home} exact/>
            </Switch>
          </BrowserRouter> */}
          <Contact />
        </div>

       
      );
    }
  }

export default App;
