import { ReactNode } from "react";

export type MovieAction =
  | { type: 'SEARCH_MOVIES_SUCCESS'; payload: { Search: Movie[]; page: number; totalResults: number } }
  | { type: 'SELECT_MOVIE'; payload: Movie }
  | { type: 'SEARCH_MOVIES_FAILURE' }
  | { type: 'SELECT_MOVIE_FAILURE' };

export interface MoviesState {
  movies: Movie[];
  currentPage: number;
  totalPages: number;
  selectedMovie: Movie | null;
}

export interface Movie {
    Plot: ReactNode;
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  
  }
  
  export interface FilterState {
    year: string; 
    type: string; 
  }




  
export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const SELECT_MOVIE = 'SELECT_MOVIE';

export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
export const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE';
export const SELECT_MOVIE_SUCCESS = 'SELECT_MOVIE_SUCCESS';
export const SELECT_MOVIE_FAILURE = 'SELECT_MOVIE_FAILURE';

export interface SearchMoviesAction {
  type: typeof SEARCH_MOVIES;
  payload: {
    searchTerm: string;
    year: string;
    type: string;
    page: number;
  };
}

export interface SelectMovieAction {
  type: typeof SELECT_MOVIE;
  payload: string;
}

export interface SearchMoviesSuccessAction {
  type: typeof SEARCH_MOVIES_SUCCESS;
  payload: any; 
}

export interface SearchMoviesFailureAction {
  type: typeof SEARCH_MOVIES_FAILURE;
}

export interface SelectMovieSuccessAction {
  type: typeof SELECT_MOVIE_SUCCESS;
  payload: any; 
}

export interface SelectMovieFailureAction {
  type: typeof SELECT_MOVIE_FAILURE;
}
