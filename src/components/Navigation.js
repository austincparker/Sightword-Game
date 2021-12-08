import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
        </div>
      </nav>
    </div>
  );
}
