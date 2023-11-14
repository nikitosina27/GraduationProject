import {
  SEARCH_MOVIES,
  SELECT_MOVIE,
  SearchMoviesAction,
  SelectMovieAction,
  SearchMoviesSuccessAction,
  SearchMoviesFailureAction,
  SelectMovieSuccessAction,
  SelectMovieFailureAction,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
  SELECT_MOVIE_FAILURE,
  SELECT_MOVIE_SUCCESS,
} from '../../types/types';

export const searchMovies = (
  searchTerm: string,
  year: string,
  type: string,
  page: number
): SearchMoviesAction => ({
  type: SEARCH_MOVIES,
  payload: { searchTerm, year, type, page },
});

export const selectMovie = (id: string): SelectMovieAction => ({
  type: SELECT_MOVIE,
  payload: id,
});

export const searchMoviesSuccess = (data: any): SearchMoviesSuccessAction => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload: data,
});

export const searchMoviesFailure = (): SearchMoviesFailureAction => ({
  type: SEARCH_MOVIES_FAILURE,
});

export const selectMovieSuccess = (data: any): SelectMovieSuccessAction => ({
  type: SELECT_MOVIE_SUCCESS,
  payload: data,
});

export const selectMovieFailure = (): SelectMovieFailureAction => ({
  type: SELECT_MOVIE_FAILURE,
});
