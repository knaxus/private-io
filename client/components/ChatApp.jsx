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
        {username: 'Jhon'}, 
        {username: 'Danny'}, 
        {username: 'Arvil'}, 
        {username: 'Lois'}
      ],
      messages: [
        {from: 'Ashok', text: 'Hello Ashok, how are you'},
        {from: 'Arun', text: 'Hello Arun, I am fine you say'},
        {from: 'Ashok', text: 'I am doing great'},
        {from: 'Arun', text: 'What about studies'},
        {from: 'Ashok', text: 'Going good, learning React also!'}
      ],
      activeUser: 'Ashok',
      activeChat: 'Choose User'
    }
  }

  _handleMessageSubmit(e){
    e.preventDefault();
    const message = ReactDOM.findDOMNode('message').value;

    console.log(message);

    // const newMessages = [...this.state.messages];

    // if(message.length > 0){
    //   const thread = {from: this.state.activeUser, message: message};
    //   newMessages.push(thread);
    // }

    // this.setState({messages: newMessages});
    //this.refs.message.value = '';
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
            <UserList users={this.state.users}/>
          </div>
          <div className="col s9 l10">
            <MessageList messages = {this.state.messages} activeChat={this.state.activeChat} />
            <div className="row">
              <MessageForm handleSubmit={this._handleMessageSubmit.bind(this)}/>                          
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatApp;