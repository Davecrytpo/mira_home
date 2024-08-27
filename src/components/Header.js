// src/components/Header.js
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, Link } from 'react-router-dom';
import './Header.css';

const Header = ({
  className = "",
  notifications,
  avatar,
  showLoginSection,
}) => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/sign-up-page');
  };

  const handleLoginClick = () => {
    navigate('/sign-in-page');
  };

  return (
    <header className={`header ${className}`}>
      <div className="header-content">
        <img className="logo-icon" loading="lazy" alt="" src="/logo.svg" />
        <div className="nav-links">
          <Link className="home" to="/">Home</Link>
          <Link className="stays" to="/about-us">About Us</Link>
          <Link className="become-a-host" to="/property-details">Property Details</Link>
          <button className="signup-btn" onClick={handleSignupClick}>Sign-up</button>
          <button className="login-btn" onClick={handleLoginClick}>Login</button>
        </div>
        {showLoginSection && (
          <div className="login-section">
            <img
              className="notifications-icon"
              loading="lazy"
              alt=""
              src={notifications}
            />
            <img className="avatar-icon" loading="lazy" alt="" src={avatar} />
          </div>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  notifications: PropTypes.string,
  avatar: PropTypes.string,
  showLoginSection: PropTypes.bool,
};

export default Header;
