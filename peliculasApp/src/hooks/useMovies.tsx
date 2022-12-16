import { useEffect, useState } from 'react';
import { movieDB } from '../api/movieDB';
import { MovieDBNowPlaying, Movies } from '../interfaces';

export const useMovies = () => {
  const [moviesPremieres, setMoviesPremieres] = useState<Movies[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    try {
      const resp = await movieDB.get<MovieDBNowPlaying>('./now_playing');
      setMoviesPremieres(resp?.data?.results);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return { moviesPremieres, isLoading };
};
