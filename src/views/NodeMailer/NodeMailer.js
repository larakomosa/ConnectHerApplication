import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';
import { Button, UncontrolledTooltip } from 'reactstrap';

class NodeMailer extends Component {
  state = {
    sent: false,
  };
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      sent: true,
    });
    const subject = `Connection Request From ${this.props.store.user.first_name} ${this.props.store.user.last_name}`;
    // const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // if (subject || message === '') {
    //   alert('Please fill in missing fields');
    // } else {
    axios({
      method: 'POST',
      url: '/api/nodemailer/mail',
      data: {
        subject: subject,
        toEmail: this.props.store.listingClickedReducer.email,
        message: message,
      },
    })
      .then((response) => {
        if (response.data.msg === 'success') {
          alert('Message Sent.');

          this.resetForm();
        } else if (response.data.msg === 'fail') {
          alert('Message failed to send.');
        }
      })
      .catch((error) => {
        console.log('error sending message', error);
      });
  }
  // }

  resetForm = () => {
    document.getElementById('contact-form').reset();
  };

  render() {
    if (this.state.sent === true) {
      return (
        <div className="col-sm-8 offset-sm-2 text-center">
          <h1 style={{ color: 'white' }}>Message Sent successfully!</h1>
        </div>
      );
    } else {
      return (
        <div className="col-sm-8 offset-sm-2">
          <form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                className="form-control"
                rows="7"
                id="message"
              ></textarea>
              <UncontrolledTooltip
                delay={0}
                fade={true}
                placement="right"
                target="message"
              >
                Reminder: The recipient can’t respond to your message. To keep
                the conversation going, include your contact info!
              </UncontrolledTooltip>
            </div>
            <Button color="secondary" type="submit">
              Submit
            </Button>
          </form>
        </div>
      );
    }
  }
}

export default connect(mapStoreToProps)(NodeMailer);
