import React, {Component} from 'react';
import propTypes from 'prop-types';
import Message from './Message.jsx';

class MessageList extends Component{
  render(){
    const {messages} = this.props;

    return(
      <div class="col s9 l10 chat-list">
        <ul class="collection with-header">
          <li class="collection-header">
            <h4>First Name</h4>
          </li>
          <div class="chats-holder">
            {
              messages.map((message) => {
                <Message message={message}/>
              })
            }
          </div>
        </ul>
      </div>
    );
  }
}

export default MessageList;

MessageList.propTypes = {
  messages: propTypes.array.isRequired
}