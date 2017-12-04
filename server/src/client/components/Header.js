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
        <nav className="navbar navbar-expand-md navbar-light">
          <a className="navbar-brand center" href="/">
            <img
              src="/media/to_starenio.svg"
              title="Το Σταρένιο"
              alt="Το Σταρένιο"
              height="80"
              width="185"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  <img src="media/tourtes_genethlion.svg" alt="Τούρτες Γενεθλίων" title="Τούρτες Γενεθλίων" height="70" width="70" />
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  <img src="media/glika.svg" alt="Γλυκά" title="glika" height="70" width="70"/>
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>

        <Link to="/">Starenio </Link>
        <div>
          <Link to="/users">Users</Link>
          <Link to="/admins">Admins</Link>
          {authButton}
        </div>
      </header>
    );
  }
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
