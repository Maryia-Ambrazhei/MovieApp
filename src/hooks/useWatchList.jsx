import { useState, useEffect } from 'react';

const useWatchList = () => {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    setWatchList(getWatchList());
  }, []);

  const getWatchList = () => {
    const localStorageValue = JSON.parse(localStorage.getItem('WatchList'));
    return localStorageValue || [];
  };

  const checkIfInWatchList = (movieId) => {
    const result = watchList.find((element) => element.movieId === movieId);
    return !!result;
  };

  const addToWatchList = (movie) => {
    const localStorageWatchList = getWatchList();
    const updatedWatchList = [...localStorageWatchList, movie];
    localStorage.setItem('WatchList', JSON.stringify(updatedWatchList));
    setWatchList(updatedWatchList);
  };

  const removeFromWatchList = (movie) => {
    const localStorageWatchList = getWatchList();
    const movieToRemove = localStorageWatchList.findIndex(
      (element) => element.movieId === movie.movieId,
    );
    const updatedWatchList = localStorageWatchList.slice();
    if (movieToRemove >= 0) {
      updatedWatchList.splice(movieToRemove, 1);
    }
    localStorage.setItem('WatchList', JSON.stringify(updatedWatchList));
    setWatchList(updatedWatchList);
  };

  return {
    watchList,
    checkIfInWatchList,
    addToWatchList,
    removeFromWatchList,
  };
};

export default useWatchList;
