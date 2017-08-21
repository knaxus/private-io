import React, {Component} from 'react';
import propTypes from 'prop-types';

class User extends Component{

  _handleUserSelect(e){
    e.preventDefault();
    const {selectUser} = this.props;
    const username = e.target.innerHTML;
    selectUser(username);
  }

  render(){
    return(
      <li className="collection-item avatar" >
        <img style={{marginTop:'4%'}} src="http://lorempixel.com/50/50" className="circle"/>
        <p onClick={this._handleUserSelect.bind(this)} style={{marginTop:'8%', fontWeight:'bolder', cursor: 'pointer'}}>{this.props.username}</p>
      </li>
    );
  }
}

export default User;

User.propTypes = {
  username: propTypes.string.isRequired,
  selectUser: propTypes.func.isRequired
}