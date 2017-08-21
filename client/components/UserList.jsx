import React, {Component} from 'react';
import propTypes from 'prop-types';
import User from './User.jsx';

class UserList extends Component{
  render(){
    const {users} = this.props;

    return(
      <div class="row">
        <div class="col s3 l2 user-list">
          <ul class="collection with-header">
            <li class="collection-header">
              <h4>Online Users</h4>
            </li>
            <div class="users-holder">
              {
                users.map((user) => {
                  <User username={user.username}/>
                })
              }
            </div>
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