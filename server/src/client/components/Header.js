import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  componentDidMount() {

  }

  render() {
    const authButton = this.props.auth ? (
      <a href="/api/logout">Logout</a>
    ) : (
      <a href="/api/auth/google">Login</a>
    );
    return (
      <header>
        <nav className="navbar navbar-expand navbar-light" id="topmenu">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".collapsedd">
              <span className="navbar-toggler-icon"></span>
              </button>
            <div className="navbar-nav flex-grow">
              <div className="collapse navbar-collapse collapsedd">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  <img src="/media/tourtes-genethlion.svg" alt="Τούρτες Γενεθλίων" title="Τούρτες Γενεθλίων" height="70" width="70" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  <img src="/media/glika.svg" alt="Γλυκά" title="glika" height="70" width="70" />
                </Link>
              </li>
            </ul>
            </div>
            </div>
            <div className="navbar-nav flex-grow justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="navbar-brand" to="/">
                  <img
                    src="/media/to_starenio.svg"
                    title="Το Σταρένιο"
                    alt="Το Σταρένιο"
                    height="80"
                    width="185"
                  />
                </Link>
              </li>
            </ul>
            </div>
            <div className="navbar-nav flex-grow">
              <div className="collapse navbar-collapse collapsedd">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  <img src="/media/tourtes-gamou.svg" alt="Τούρτες Γάμου" title="Τούρτες Γάμου" height="70" width="70" />
                </Link>
              </li>
            </ul>
            </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
