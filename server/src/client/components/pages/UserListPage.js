import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions';

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  //  return users
  renderUsers() {
    return this.props.users.map(user => <li key={user.id}>{user.name}</li>);
  }

  render() {
    return (
      <div>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

//  function that will request necessery data by dispatch
function loadData(store) {
  return store.dispatch(fetchUsers());
}

//  export
export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UserList),
};
