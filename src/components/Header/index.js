import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the title based on the current path
  const getTitle = () => {
    if (location.pathname === '/videos') {
      return 'Basic Mathematics 101'; // Title for the videos page
    }
    return ''; // No title for other pages
  };

  return (
    <header className="header">
      <img src="/whitehat_logo.png" alt="Logo" className="logo" />
      <h1 className="title">{getTitle()}</h1>
      <div className="header-controls">
        <button onClick={() => navigate(-1)}>🔙</button>
        <button className="call-teacher">📞Call Teacher</button>
        <button className="support">🧑‍🦱Support</button>
      </div>
    </header>
  );
};

export default Header;
