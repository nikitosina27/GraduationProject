import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RegistrationButton from './RegistrationButton';  
import '../styles/styles.css';
import SearchPage from './SearchPage';

const OMDb_API_KEY = '88560c1b';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
}

function Home() {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const apiUrl = `https://www.omdbapi.com/?s=movie&type=movie&page=${currentPage}&apikey=${OMDb_API_KEY}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then((data: { Search: Movie[] } | undefined) => {
        if (data && data.Search) {
          setPopularMovies(prevMovies => [...prevMovies, ...data.Search]);
        }
      })
      .catch(error => console.error('Error fetching popular movies:', error));
  }, [currentPage]);

  const filteredMovies = popularMovies.filter(movie =>
    movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setCurrentPage(prevPage => prevPage + 1);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <header>
        <h1>MovieX</h1>
        <SearchPage onSearch={setSearchTerm} />
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/films">Фильмы</Link></li>
            <li><Link to="/series">Сериалы</Link></li>
            <li><Link to="/about">О нас</Link></li>
          </ul>
             <RegistrationButton /> {}
        </nav>
      </header>
     

      <div className="featured-movies">
        <h2>Популярные фильмы</h2>
        <ul className="movie-list">
          {filteredMovies.map(movie => (
            <li key={movie.imdbID} className="movie-item">
              <h3>{movie.Title}</h3>
              <p>Год выпуска: {movie.Year}</p>
              <Link to={`/movies/${movie.imdbID}`}>
                <img src={movie.Poster} alt={movie.Title} />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="pagination">
        {Array.from({ length: 10 }, (_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>

      <footer>
        <p>&copy; 2023 Киносайт. Все права защищены.</p>
      </footer>
    </div>
  ); ;
}

export default Home;

