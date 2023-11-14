import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import RegistrationButton from './RegistrationButton';


const OMDb_API_KEY = '88560c1b';

interface Series {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
}

const SeriesPage: React.FC = () => {
  const [popularSeries, setPopularSeries] = useState<Series[]>([]);

  useEffect(() => {
    const apiUrl = `https://www.omdbapi.com/?s=series&type=series&page=1&apikey=${OMDb_API_KEY}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then((data: { Search: Series[] } | undefined) => {
        if (data && data.Search) {
          setPopularSeries(data.Search);
        }
      })
      .catch(error => console.error('Error fetching popular series:', error));
  }, []);

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
        <RegistrationButton /> {}
      </header>

      <section className="series-container">
        <h2>Популярные сериалы</h2>
        <div className="series-list">
          {popularSeries.map(series => (
            <div key={series.imdbID} className="series-item">
              <h3>{series.Title}</h3>
              <p>Год выпуска: {series.Year}</p>
              <Link to={`/series/${series.imdbID}`}>
                <img src={series.Poster} alt={series.Title} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>&copy; 2023 MovieX. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default SeriesPage;
