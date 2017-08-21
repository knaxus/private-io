import React, {Component} from 'react';
import {render} from 'react-dom';
import ChatApp from './components/ChatApp.jsx';
import Cover from './components/Cover.jsx';


class App extends Component{
  componentDidMount(){
    socket.on('connect', () => {
      this.setState({connectedToServer: true});      
      console.log('Connected to server');

      socket.on('NewUserList', (usersList) => {
        this.setState({users: usersList.list});
      });

      socket.on('disconnect', () => {
        this.setState({connectedToServer: false});        
        console.log('Disconnected from server');
      });
    });
  }
  constructor(props){
    super(props);
    this.state = {
      connectedToServer: false,
      users: [],
      messages: [
        {from: 'Arun', text: 'Hello Ashok, how are you'},
        {from: 'Ashok', text: 'Hello Arun, I am fine you say'},
        {from: 'Arun', text: 'I am doing great'},
        {from: 'Ashok', text: 'What about studies'},
        {from: 'Arun', text: 'Going good, learning React also!'}
      ],
      activeUser: 'Default',
      activeChat: 'Choose user to chat with',
      isSubmitted: false
    }
  }

  _addNewUser(username){
    username = username.charAt(0).toUpperCase() + username.slice(1);
    const user = {username};
    if(this.state.connectedToServer){
      socket.emit('NewUser', {username});
      this.setState({
        isSubmitted: true,
        activeUser: username
      });
    }
    else if (!this.state.connectedToServer) {
      //TODO flash a toaster
      alert('No connection to server');
    }
    // const allUsers = [...this.state.users, user];
    // this.setState({
    //   users: allUsers,
    //   isSubmitted: true,
    //   activeUser: username
    // });
  }

  _selectUserForChat(username){
    this.setState({activeChat: username});
  }

  _addMessage(message){
    // const newMessages = [...this.state.messages];
    // newMessages.push(message);
    // this.setState({messages: newMessages});
    if(this.state.connectedToServer){
      const thread= {
        ...message,
        to: this.state.activeChat
      }

      if(thread.to === 'Choose user to chat with'){
        return alert('Chooose a person to chat with');
      }

      socket.emit('MessageCreated', thread);
    }
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