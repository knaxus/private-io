import React, {Component} from 'react';
import propTypes from 'prop-types';

class MessageForm extends Component{
  
  _handleMessageSubmit(e){
    e.preventDefault();
    const {addMessage} = this.props;
    const msgThread = this.refs.message.value;

    if(msgThread.length > 0) {
      const message = { from: this.props.activeUser, text: msgThread}; 
      addMessage(message);
    }

    this.refs.message.value = '';
  }

  render(){
    return(
      <form className="msg-form" onSubmit={this._handleMessageSubmit.bind(this)}>
        <div className="input-field col s8">
          <input ref="message" id="last_name" type="text" autoComplete="off"/>
          <label htmlFor="last_name">Your Message</label>
        </div>
        <button className="btn col s2" style={{marginTop: '1.5%'}}>Send <i className="material-icons right">send</i></button>
      </form>
    );
  }
}

export default MessageForm;

MessageForm.propTypes = {
  addMessage: propTypes.func.isRequired
}