import React, {Component} from 'react';
import propTypes from 'prop-types';
import User from './User.jsx';

class UserList extends Component{
  render(){
    const {users} = this.props;

    return(
      <div class="row">
        <div class="col s2 user-list">
          <ul class="collection">
            {
              users.map((user) => {
                <User username={user}/>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default UserList;

UserList.propTypes = {
  users: propTypes.array.isRequired
}