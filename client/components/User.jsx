import React, {Component} from 'react';
import propTypes from 'prop-types';

class User extends Component{
  render(){
    return(
      <li className="collection-item avatar">
        <img style={{marginTop:'4%'}} src="http://lorempixel.com/50/50" className="circle"/>
        <p style={{marginTop:'8%', fontWeight:'bolder'}}>{this.props.username}</p>
      </li>
    );
  }
}

export default User;

User.propTypes = {
  username: propTypes.string.isRequired
}