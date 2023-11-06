const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IGetMovieDetail {
  backdrop_path: string;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  title: string;
  vote_average: number;
  vote_count: number;
}

// Movies - NowPlaying
export function getNowPlayingMovies() {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR`
  ).then((response) => response.json());
}

// Movies - Popular
export function getPopularMovies() {
  return fetch(
    `${BASE_PATH}/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR`
  ).then((response) => response.json());
}

// Movies - TopRated
export function getTopRatedMovies() {
  return fetch(
    `${BASE_PATH}/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR`
  ).then((response) => response.json());
}

// Movies - Upcoming
export function getUpcomingMovies() {
  return fetch(
    `${BASE_PATH}/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR`
  ).then((response) => response.json());
}

// Movie Detail
export function getMovieDetail(movieId: string | undefined) {
  return fetch(
    `${BASE_PATH}/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR`
  ).then((response) => response.json());
}
