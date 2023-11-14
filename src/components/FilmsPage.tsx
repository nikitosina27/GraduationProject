import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import RegistrationButton from './RegistrationButton';
import SearchPage from './SearchPage';

const OMDb_API_KEY = '88560c1b';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
}

const FilmsPage: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [newMovies, setNewMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // Запрос для популярных фильмов
    const popularUrl = `https://www.omdbapi.com/?s=movie&type=movie&page=1&apikey=${OMDb_API_KEY}`;
    fetchMovies(popularUrl, setPopularMovies);

    
    const newUrl = `https://www.omdbapi.com/?s=new&type=movie&page=1&apikey=${OMDb_API_KEY}`;
    fetchMovies(newUrl, setNewMovies);
  }, []);

  const fetchMovies = (apiUrl: string, setMovies: React.Dispatch<React.SetStateAction<Movie[]>>) => {
    fetch(apiUrl)
      .then(response => response.json())
      .then((data: { Search: Movie[] } | undefined) => {
        if (data && data.Search) {
          setMovies(data.Search);
        }
      })
      .catch(error => console.error('Error fetching movies:', error));
  };

  return (
    <div>
      <header>
        <h1>MovieX</h1>
        <SearchPage />
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/films">Фильмы</Link></li>
            <li><Link to="/series">Сериалы</Link></li>
            <li><Link to="/about">О нас</Link></li>
          </ul>
        </nav>
        <RegistrationButton /> {}
      </header>

      <section className="films-page-section">
        <h2>Популярные фильмы</h2>
        <div className="films-container">
          {popularMovies.map(movie => (
            <div key={movie.imdbID} className="film-item">
              <h3>{movie.Title}</h3>
              <p>Год выпуска: {movie.Year}</p>
              <Link to={`/movies/${movie.imdbID}`}>
                <img src={movie.Poster} alt={movie.Title} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="films-page-section">
        <h2>Новые релизы</h2>
        <div className="films-container">
          {newMovies.map(movie => (
            <div key={movie.imdbID} className="film-item">
              <h3>{movie.Title}</h3>
              <p>Год выпуска: {movie.Year}</p>
              <Link to={`/movies/${movie.imdbID}`}>
                <img src={movie.Poster} alt={movie.Title} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>&copy; 2023 Киносайт. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default FilmsPage;
