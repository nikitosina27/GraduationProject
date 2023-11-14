import React from 'react';
import { auth } from '../firebaseConfig';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;

