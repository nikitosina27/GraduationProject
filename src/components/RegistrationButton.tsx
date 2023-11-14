import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationButton: React.FC = () => {
  const buttonStyle: React.CSSProperties = {
    position: 'fixed',
    top: '10px',
    right: '10px',
    zIndex: 999, 
  };

  return (
    <div style={buttonStyle}>
      <Link to="/registration">
        <button>
        <img src="/registration.png" alt="reg" style={{ width: '40px', height: '40px' }} />
        </button>
      </Link>
    </div>
  );
};

export default RegistrationButton;
