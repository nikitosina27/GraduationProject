import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useHistory } from 'react-router-dom';
import { registerUser, UserData } from '../redux/actions/userActions';
import '../styles/styles.css';
import { RootState } from '../redux/store';


const RegistrationPage: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    if (!email || !password) {
      alert('Пожалуйста, введите электронную почту и пароль.');
      return;
    }

    try {
      await dispatch(registerUser({ email, password }));
      // Перенаправление на главную страницу после успешной регистрации
      history.push('/');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="container">
      <div className="registration-form">
        <h2>Регистрация</h2>
        <form>
          <label>
            Электронная почта:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Пароль:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="button" onClick={handleRegistration}>
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;

