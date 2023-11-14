import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import RegistrationButton from './RegistrationButton';


const AboutPage: React.FC = () => {
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

      <section className="about-content">
        <h2>Наша команда</h2>
        <p>
          Мы - команда кинолюбителей, страстно увлеченных миром кино и телевидения.
          Наша миссия - делиться с вами лучшими фильмами и сериалами, чтобы сделать
          ваше время насыщенным и увлекательным.
          Мы постоянно обновляем наш каталог, чтобы предоставить вам самые свежие релизы и
        классические шедевры. Надеемся, что вы найдете здесь все, что искали, и проведете время с
        удовольствием.
        </p>
        <p>
            © Shendryk Development
        </p>
        {/* Другой текст и контент "О нас" */}
      </section>

      <footer>
        <p>&copy; 2023 Киносайт. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
