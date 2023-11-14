import { MoviesState } from '../../types/types'

const initialState: MoviesState  = {
    movies: [],
    currentPage: 1,
    totalPages: 0,
    selectedMovie: null,
  };

  const moviesReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case 'SEARCH_MOVIES_SUCCESS':
        return {
          ...state,
          movies: action.payload.Search,
          currentPage: action.payload.page,
          totalPages: Math.ceil(action.payload.totalResults / 10),
        };
      case 'SELECT_MOVIE':
        return {
          ...state,
          selectedMovie: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default moviesReducer;
  