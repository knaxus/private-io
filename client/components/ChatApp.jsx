import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import UserList from './UserList.jsx';
import MessageList from './MesageList.jsx';
import MessageForm from './MessageForm.jsx';

class ChatApp extends Component{
  constructor(props){
    super(props);
    this.state = {
      users: [
        {username: 'Ankit'}, 
        {username: 'Akash'}, 
        {username: 'Arun'}, 
        {username: 'John'}, 
        {username: 'Danny'}, 
        {username: 'Arvil'}, 
        {username: 'Lois'}
      ],
      messages: [
        {from: 'Arun', text: 'Hello Ashok, how are you'},
        {from: 'Ashok', text: 'Hello Arun, I am fine you say'},
        {from: 'Arun', text: 'I am doing great'},
        {from: 'Ashok', text: 'What about studies'},
        {from: 'Arun', text: 'Going good, learning React also!'}
      ],
      activeUser: 'Ashok',
      activeChat: 'Choose user to chat with'
    }
  }

  _selectUserForChat(username){
    this.setState({activeChat: username});
  }

  _addMessage(message){
    const newMessages = [...this.state.messages];
    newMessages.push(message);
    this.setState({messages: newMessages});
  }

  render(){
    return (
      <div>
        <div className="row">
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo center">What's Up?</a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s3 l2">
            <UserList selectUser={this._selectUserForChat.bind(this)} users={this.state.users}/>
          </div>
          <div className="col s9 l10">
            <MessageList messages = {this.state.messages} activeChat={this.state.activeChat} />
            <div className="row">
              <MessageForm activeUser={this.state.activeUser} addMessage={this._addMessage.bind(this)}/>                          
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatApp;