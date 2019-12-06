import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/navbar'
import Footer from './components/footer'
// import logo from './logo.svg';
import './Reset.css';
import './App.css';

import Home from './pages/home'


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
          <NavBar 
            className='navbar'
          />
            <div className='content'>
              <BrowserRouter>
                <Switch>
                  <Route path='/' component={Home} exact/>
                </Switch>
              </BrowserRouter>
            </div>
          <Footer 
            className='footer'
          />
        </div>

        // <div className="App">
        //   <header className="App-header">
        //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
        //     <h1 className="App-title">Lets Kick Some Ass, Amirah!!</h1>
        //   </header>
          
        //   <p className="App-intro">{this.state.data}</p>
        // </div>
      );
    }
  }

export default App;
