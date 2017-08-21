import React, {Component} from 'react';
import propTypes from 'prop-types';

class MessageForm extends Component{
  render(){
    return(
      <div class="row">
        <form className="msg-form" onSubmit={this.props.handleSubmit()}>
          <div className="input-field col s8">
            <input ref="message" id="last_name" type="text" className="validate"/>
            <label for="last_name">Your Message</label>
          </div>
          <button className="waves-effect waves-light btn col s2" style="margin-top:1.5%">Send <i class="material-icons right">send</i></button>
        </form>
      </div>
    );
  }
}

export default MessageForm;

MessageForm.propTypes = {
  handleSubmit: propTypes.func.isRequired
}