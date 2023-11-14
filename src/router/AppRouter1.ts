import React from 'react';
import { useSelector } from 'react-redux';
import {  Route, BrowserRouter as Router } from 'react-router-dom';


import Login from '../components/Login'; // Импортируйте компоненты
import Logout from '../components/Logout';
import Home from '../components/Home';

interface RootState {
  user: {
    user: string; 
  };
}
