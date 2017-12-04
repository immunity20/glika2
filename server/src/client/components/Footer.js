import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {

  return (
    <footer>
      <Link to="/">Starenio </Link>
      <div>
        <Link to="/users">Users</Link>
        <Link to="/admins">Admins</Link>
      </div>
    </footer>
  );
};

export default Footer;
