import React, {Component} from 'react';
import propTypes from 'prop-types';

class Cover extends Component{
  _handleUserNameSubmit(e){
    console.log('Submitted');
    e.preventDefault();
    const {addUser} = this.props;
    const username = this.refs.username.value;

    if(username.length > 3){
      addUser(username);
    }
    else {
      this.refs.username.value = 'Username should be more than 3 chars';
    }

    console.log(username);
  }

  render(){
    return(
      <div className="row">
        <div className="col s12 m10 l6 offset-l4 offset-m2">
          <h1>Welcome to WHAT'S UP !</h1>
          <img src="img/logo.png" alt="Logo"/>
          <form onSubmit={this._handleUserNameSubmit.bind(this)}>
            <div className="input-field col s6">
              <input ref="username" id="username" placeholder="Type a username here" type="text" className="validate" autoComplete="off"/>
            </div>
            <div className="col s4 l2">
              <button className="waves-effect waves-light btn" style={{marginTop: '25px'}}>Start</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


export default Cover;

Cover.propTypes = {
  addUser: propTypes.func.isRequired
}