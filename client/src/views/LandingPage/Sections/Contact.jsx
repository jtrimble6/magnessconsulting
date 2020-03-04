import React, { Component } from 'react';
import axios from 'axios'
import "../../../assets/css/stylecustom.css"
// import ContactSuccess from './alerts/contactSuccess'
// import ContactError from './alerts/contactError'
// import EmailError from './alerts/emailError'

// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
// import CustomDropdown from "components/CustomDropdown/CustomDropdown.js"
// import MenuItem from "@material-ui/core/MenuItem";
// import Divider from "@material-ui/core/Divider";

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';

// import styles from "assets/css/jss/material-kit-react/views/landingPageSections/workStyle.js";

// const useStyles = makeStyles(styles);

class Contact extends Component {
    constructor(props) {
        super(props);

        // this.toggleContact = this.toggleContact.bind(this);

        this.state = {
          collapsed: true,
          contactSuccess: false,
          contactError: false,
          email: '',
          emailError: false,
          emailErrorAlert: false,
          serviceRequest: 5,
          nameLabelText: "Name",
          emailLabelText: "Email",
          phoneLabelText: "Phone Number (optional)",
          messageLabelText: "Message",
          data: "You are NOT connected to the server"
        }

        this.callBackendAPI = this.callBackendAPI.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleServiceChange = this.handleServiceChange.bind(this)
        this.resetForm = this.resetForm.bind(this)
        this.checkEmail = this.checkEmail.bind(this)
        
    }

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

    toggleContact() {
        this.setState({
            collapsed: !this.state.collapsed
        })
      }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
        this.checkEmail()
      }
  
    handleServiceChange(event, index, value) {
      //set selection to the value selected
      this.setState({ serviceRequest : value });
  
      }

    handleSubmit(e) {
      e.preventDefault()
      
      const name = document.getElementById('name').value
      const email = document.getElementById('email').value
      const phone = document.getElementById('phone').value
      const service = this.state.serviceRequest
      const message = document.getElementById('message').value
      let serviceRequested = "None Specified"

      switch(service) {
        case 1:
          serviceRequested = "Leadership Coaching";
          break;
        case 2:
          serviceRequested = "Organizational Development";
          break;
        case 3:
          serviceRequested = "Process Improvement";
          break;
        case 4:
          serviceRequested = "Team Development";
          break;
        case 5:
          serviceRequested = "Multiple Services";
          break;
        default:
          serviceRequested = "None Specified";
      }

      // console.log('EMAIL ERROR? ', this.state.emailError)
      if(this.state.emailError === true) {
        this.setState({emailErrorAlert: true})
        return;
      } else {
        this.setState({emailErrorAlert: false})
      }

      // console.log('MESSAGE: ', name, email, phone, message)

      if(name === '' || email === '' || message === '') {
        this.setState({
          contactError: true
        })
        return
      }

      console.log('Data: ', name, email, phone, serviceRequested, message)

      axios({
        method: "POST", 
        url:"http://magnessconsulting.herokuapp.com/send",
        // url:"http://localhost:3000/send", 
        data: {
            name: name,   
            email: email,  
            phone: phone,
            service: service,
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
      this.setState({
        email: '',
        serviceRequest: 5,
        nameLabelText: "Name",
        emailLabelText: "Email",
        phoneLabelText: "Phone Number (optional)",
        messageLabelText: "Message"
       })
      
      }

    checkEmail() {
      const email = this.state.email;
      // console.log(email);
      let emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      // console.log('EMAIL VALID? ', emailValid)
      if (emailValid === null) {
        // console.log('EMAIL ERROR!!!!!!')
        this.setState({ emailError: true })
      } else { this.setState({ emailError: false }) }

      }

    render() {
      // const muiTheme = getMuiTheme({}, {
      //   menuItem: {
      //     selectedTextColor: 'white',
      //   },
      // });
      // const classes = useStyles();
      return (
        <div className="contactSection">
          <GridContainer justify="center">
            <GridItem cs={12} sm={12} md={8}>
              <h2 className="contactTitle">CONTACT US</h2>
              {/* <h4 className={classes.description}>
                Divide details about your product or agency work into parts. Write a
                few lines about each one and contact us about any further
                collaboration. We will responde get back to you in a couple of
                hours.
              </h4> */}
              <form>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText={this.state.nameLabelText}
                      id="name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText={this.state.emailLabelText}
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText={this.state.phoneLabelText}
                      id="phone"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                  <MuiThemeProvider>
                    <DropDownMenu 
                      id="service"
                      value={this.state.serviceRequest} 
                      onChange={this.handleServiceChange}
                      labelStyle={{
                        color: "rgb(179,179,179)"
                      }}
                    >
                      <MenuItem value={1} primaryText="Leadership Coaching"  />
                      <MenuItem value={2} primaryText="Organizational Development" />
                      <MenuItem value={3} primaryText="Process Improvement" />
                      <MenuItem value={4} primaryText="Team Development" />
                      <MenuItem value={5} primaryText="Multiple Services" />
                    </DropDownMenu>
                  </MuiThemeProvider>
                  </GridItem>
                  <CustomInput
                    labelText={this.state.messageLabelText}
                    id="message"
                    formControlProps={{
                      fullWidth: true,
                      className: "contactTextArea"
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4} className="contactTextCenter" align="center" justify="center">
                      <Button className="contactSubmit" color="primary" onClick={this.handleSubmit}>Send Message</Button>
                    </GridItem>
                  </GridContainer>
                </GridContainer>
              </form>
            </GridItem>
          </GridContainer>
        </div>
      );
  }
}

export default Contact;