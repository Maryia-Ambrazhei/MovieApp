import React from 'react';
import SearchPage from './SearchPage.jsx';
import MovieDetailsPage from './MovieDetailsPage.jsx';
import { Outlet, Link } from 'react-router-dom';

const App = () => (
  <div>
    <nav className="navigation">
      <div className="header-section">
        <h1 className="app-name">moviepoisk</h1>
        <div className="navigation-items-wrapper">
          <Link className="navigation-item" to="/">
            Search
          </Link>
          <Link className="navigation-item" to="movieDetails">
            Details
          </Link>
        </div>
      </div>
    </nav>
    <Outlet />
  </div>
);

export default App;
