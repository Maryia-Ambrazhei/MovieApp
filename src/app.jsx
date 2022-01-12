import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const App = () => (
  <div>
    <nav className="navigation">
      <div className="header-section">
        <h1 className="app-name">moviepoisk.</h1>
        <div className="navigation-items-wrapper">
          <Link className="navigation-item" to="/">
            <span className="navigation-phrase">Search</span>
            <i className="fas fa-search navigation-icon"></i>
          </Link>
          <Link className="navigation-item" to="watchList">
            <span className="navigation-phrase">WatchList</span>
            <i className="fas fa-heart navigation-icon"></i>
          </Link>
        </div>
      </div>
    </nav>
    <Outlet />
  </div>
);

export default App;
