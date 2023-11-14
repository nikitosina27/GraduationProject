import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Logout from '../components/Logout';
import AuthenticatedPage from '../components/AuthenticatedPage';
import UnauthenticatedPage from '../components/UnauthenticatedPage';
import Home from '../components/Home';
import MovieDetails from '../components/MovieDetails';
import About from '../components/About';
import FilmsPage from '../components/FilmsPage';
import SeriesPage from '../components/SeriesPage';
import AboutPage from '../components/AboutPage';
import RegistrationPage from '../components/RegistrationPage';

const AppRouter = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/registration" component={RegistrationPage} />
        <Route path="/films" component={FilmsPage} />
        <Route path="/series" component={SeriesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/movies/:imdbID" component={MovieDetails} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </Router>
  );
};

export default AppRouter;



