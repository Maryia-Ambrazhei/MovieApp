import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import App from './app.jsx';
import SearchPage from './routes/SearchPage.jsx';
import MovieDetailsPage from './routes/MovieDetailsPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<SearchPage />} />
        <Route path="movieDetails/:movieId" element={<MovieDetailsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
