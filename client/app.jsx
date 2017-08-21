import React, {Component} from 'react';
import {render} from 'react-dom';
import ChatApp from './components/ChatApp.jsx';
import Cover from './components/Cover.jsx';


class App extends Component{
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
      activeChat: 'Choose user to chat with',
      isSubmitted: false
    }
  }

  _addNewUser(username){
    const user = {username};
    const allUsers = [...this.state.users, user];
    this.setState({
      users: allUsers,
      isSubmitted: true
    });
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
    if(this.state.isSubmitted) {
      return(
        <ChatApp 
          {...this.state}  
          selectUserForChat = {this._selectUserForChat.bind(this)}
          addMessage = {this._addMessage.bind(this)}
        />
      );
    }
    
    return(
      <Cover addUser = {this._addNewUser.bind(this)} />
    )
  }
}




render(<App/>, document.getElementById('app'));