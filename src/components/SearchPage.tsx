import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { setYearFilter, setTypeFilter } from '../redux/actions/filterActions';
import { setCurrentPage } from '../redux/actions/paginationActions';
import { searchMovies } from '../redux/actions/moviesActions';
import '../styles/styles.css';
import { Movie } from '../types/types';

interface SearchPageProps {
  onSearch?: (searchTerm: string) => void;
}

const SearchPage: React.FC<SearchPageProps> = ({ onSearch }) => {
  const dispatch: Dispatch = useDispatch();
  const movies = useSelector((state: any) => state.movies.movies);
  const filters = useSelector((state: any) => state.filters);
  const currentPage = useSelector((state: any) => state.pagination.currentPage);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    } else {
      dispatch(searchMovies(searchTerm, filters.year, filters.type, currentPage));
    }
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setYearFilter(e.target.value));
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTypeFilter(e.target.value));
  };

  const handlePageChange = (newPage: number) => {
    dispatch(setCurrentPage(newPage));
  };

  const { year, type } = useSelector((state: any) => state.filters);
  
  useEffect(() => {
    setSearchResults(movies);
  }, [movies]);

  useEffect(() => {
    dispatch(searchMovies(searchTerm, year, type, currentPage));
  }, [dispatch, searchTerm, year, type, currentPage]);

  return (
    <div className="search-container">
      <input
        className="searchText"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Поиск..."
      />
      <label>
        Год:
        <input type="text" onChange={handleYearChange} />
      </label>
      <label>
        Жанр:
        <input type="text" onChange={handleTypeChange} />
      </label>
      <button className="searchButton" onClick={handleSearch}>
        Поиск
      </button>
  
      {searchResults && searchResults.length > 0 ? (
        <ul>
          {searchResults.map((movie: any) => (
            <li key={movie.imdbID}>
              <a href={`/movie/${movie.imdbID}`}>{movie.Title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Нет результатов поиска</p>
      )}
    </div>
  );
};

export default SearchPage;