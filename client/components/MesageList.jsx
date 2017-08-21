import React, {Component} from 'react';
import propTypes from 'prop-types';
import Message from './Message.jsx';

class MessageList extends Component{
  render(){
    const {messages} = this.props;
    let i= 0;
    return(
      <ul className="collection with-header">
        <li className="collection-header" style={{backgroundColor: '#81d4fa'}}>
          <h4>{this.props.activeChat}</h4>
        </li>
        <div className="chats-holder">
          {
            messages.map((message) => <Message key={++i} message={message}/>)
          }
        </div>
      </ul>
    );
  }
}

export default MessageList;

MessageList.propTypes = {
  messages: propTypes.array.isRequired
}