import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (ChildComponent) => {
  class RequireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case false:
        return <div>You shouldn't be here!<Redirect to="/">Leave</Redirect></div>
        case null:
        return <div>Loading... </div>
        default: // must pass props to the child
          return <ChildComponent {...this.props} />
      }
      
    }
  }

  function mapStateToProps({ auth }) {
    return { auth };
  }
  return connect(mapStateToProps)(RequireAuth);
};
