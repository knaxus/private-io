import React, {Component} from 'react';
import propTypes from 'prop-types';
import moment from 'moment';

class Message extends Component{
  render(){
    const {message} = this.props;

    return(
      <li className="collection-item chats">
        <strong style={{fontSize:'1.1em', color: '#2c3e50'}}> {message.from} </strong>
        <span style={{fontSize: '0.8em', color: '#7f8c8d'}}>&nbsp;&nbsp;&nbsp; {message.createdAt}</span>
        <i><p style={{fontSize:'1.2em', color: '#00695c', marginTop: 0, marginBottom: '2px'}}> {message.text} </p></i>
      </li>
    );
  }
}

export default Message;

Message.propTypes = {
  message: propTypes.object.isRequired
}