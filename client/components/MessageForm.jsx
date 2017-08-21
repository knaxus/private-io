import React, {Component} from 'react';
import propTypes from 'prop-types';

class MessageForm extends Component{

  constructor(props){
    super(props);
    this.state = {
      message: []
    }
  }

  

  render(){
    return(
      <form className="msg-form" onSubmit={this.props.handleSubmit}>
        <div className="input-field col s8">
          <input ref="message" id="last_name" type="text" className="validate"/>
          <label htmlFor="last_name">Your Message</label>
        </div>
        <button className="waves-effect waves-light btn col s2" style={{marginTop: '1.5%'}}>Send <i className="material-icons right">send</i></button>
      </form>
    );
  }
}

export default MessageForm;

MessageForm.propTypes = {
  handleSubmit: propTypes.func.isRequired
}