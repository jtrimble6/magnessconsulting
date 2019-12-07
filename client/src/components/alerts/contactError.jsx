import React, { Component } from 'react';
import { Alert } from 'reactstrap'
import '../../assets/css/alert.css'

//import { Link } from 'react-router-dom';

class ContactError extends Component {
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
        if (this.props.contactError === true) {
            return (
                <Alert className='alertError' color='error' isOpen={this.state.visible} toggle={this.onDismiss}>
                    An error occured when sending the message!
                </Alert>
            )
        } else {
            return <div></div>
        }
    }
}

export default ContactError;