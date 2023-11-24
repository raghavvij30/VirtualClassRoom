import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  const location = useLocation();
  const showVideoOptions = location.pathname === '/videos';

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">📚Classroom</Link></li>
        <li><Link to="/whiteboard">🗒Whiteboard</Link></li>
        <li><Link to="/videos">▶️Videos</Link></li>
        <li><Link to="/slideshow">🎞️Slide Show</Link></li>
        <li><Link to="/documents">📝Documents</Link></li>
        <li><Link to="/doccam">🖥Doc.Cam</Link></li>
        
      </ul>
     
    </nav>
  );
};

export default Navbar;
