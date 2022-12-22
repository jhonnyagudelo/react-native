import { useEffect, useState } from 'react';
import { movieDB } from '../api/movieDB';
import { MovieResponse, Movies } from '../interfaces';

interface MoviesState {
  nowPlaying: Movies[];
  popular: Movies[];
  topRated: Movies[];
  upcoming: Movies[];
}

export const useMovies = () => {
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    try {
      const respNowPlaying = await movieDB.get<MovieResponse>('./now_playing');
      const respPopular = await movieDB.get<MovieResponse>('./popular');
      const respTopRated = await movieDB.get<MovieResponse>('./top_rated');
      const respUpComing = await movieDB.get<MovieResponse>('./upcoming');
      const response = await Promise.all([
        respNowPlaying,
        respPopular,
        respTopRated,
        respUpComing,
      ]);

      setMoviesState({
        nowPlaying: response[0]?.data?.results,
        popular: response[1]?.data?.results,
        topRated: response[2]?.data?.results,
        upcoming: response[3]?.data?.results,
      });
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return { ...moviesState, isLoading };
};
