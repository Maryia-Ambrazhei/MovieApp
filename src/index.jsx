import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import regeneratorRuntime from 'regenerator-runtime';
import './styles/main.css';
import App from './app.jsx';
import SearchPage from './routes/SearchPage.jsx';
import MovieDetailsPage from './routes/MovieDetailsPage.jsx';
import WatchListPage from './routes/WatchListPage.jsx';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<SearchPage />} />
        <Route path="movieDetails/:movieId" element={<MovieDetailsPage />} />
        <Route path="watchList" element={<WatchListPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
