import axios from 'axios';

export const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'c5b2696afd6c0b04afc14dd567a435b4',
    language: 'es-ES',
  },
});
