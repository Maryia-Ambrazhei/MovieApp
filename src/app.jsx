import React from 'react';
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
          <Link className="navigation-item" to="watchList">
            WatchList
          </Link>
        </div>
      </div>
    </nav>
    <Outlet />
  </div>
);

export default App;
