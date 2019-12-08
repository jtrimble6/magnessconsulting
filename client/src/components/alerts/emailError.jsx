import React, { Component } from 'react';
import { Alert } from 'reactstrap'
import '../../assets/css/alert.css'

//import { Link } from 'react-router-dom';

class EmailError extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        }

        this.onDismiss = this.onDismiss.bind(this)
    }

    onDismiss() {
        this.setState({ visible: false });
    }

    render() {
        // console.log(this.props.contactError);
        if (this.props.emailError === true) {
            return (
                <Alert className='alertError' color='danger' isOpen={this.state.visible} toggle={this.onDismiss}>
                    Please enter a valid email address!
                </Alert>
            )
        } else {
            return <div></div>
        }
    }
}

export default EmailError;