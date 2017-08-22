import React, {Component} from 'react';
import propTypes from 'prop-types';
import UserList from './UserList.jsx';
import MessageList from './MesageList.jsx';
import MessageForm from './MessageForm.jsx';

class ChatApp extends Component{
  render(){
    return (
      <div>
        <div className="row">
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo center">What's Up {this.props.activeUser}?</a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s3 l2">
            <UserList {...this.props} selectUser={this.props.selectUserForChat.bind(this)} users={this.props.users}/>
          </div>
          <div className="col s9 l10">
            <MessageList messages = {this.props.messages} activeChat={this.props.activeChat} />
            <div className="row">
              <MessageForm activeUser={this.props.activeUser} sendMessage={this.props.sendMessage.bind(this)}/>                          
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatApp;