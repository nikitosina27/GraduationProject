import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/styles.css';

const OMDb_API_KEY = '88560c1b';

interface MovieDetails {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
}

const MovieDetails: React.FC = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

  useEffect(() => {
    const apiUrl = `https://www.omdbapi.com/?i=${imdbID}&apikey=${OMDb_API_KEY}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setMovieDetails(data))
      .catch(error => console.error('Error fetching movie details:', error));
  }, [imdbID]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header>
        <h1>MovieX</h1>
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/films">Фильмы</Link></li>
            <li><Link to="/series">Сериалы</Link></li>
            <li><Link to="/about">О нас</Link></li>
          </ul>
        </nav>
      </header>

      <div className="movie-details-container">
        <h2>{movieDetails.Title}</h2>
        <p>Год выпуска: {movieDetails.Year}</p>
        <div className="movie-poster-container">
          <img src={movieDetails.Poster} alt={movieDetails.Title} className="movie-poster" />
        </div>
        {/* Другая информация о фильме */}
      </div>

      <footer>
        <p>&copy; 2023 Киносайт. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default MovieDetails;










