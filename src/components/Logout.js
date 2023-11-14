import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/userActions';
import { auth } from '../firebaseConfig';

 export const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      dispatch(logout());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
