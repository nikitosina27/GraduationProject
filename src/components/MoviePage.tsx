import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovie } from '../redux/actions/moviesActions';
import { RouteComponentProps } from 'react-router-dom';
import { RootState } from '../redux/store';
interface MatchParams {
  id: string; // ID ожидаемый
}




const MoviePage: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const dispatch = useDispatch();
  const selectedMovie = useSelector((state: RootState) => state.movies.selectedMovie);


  useEffect(() => {
    dispatch(selectMovie(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <div>
      {selectedMovie && (
        <div>
          <h2>{selectedMovie.Title}</h2>
          <p>{selectedMovie.Plot}</p>
        </div>
      )}
    </div>
  );
};

export default MoviePage;
