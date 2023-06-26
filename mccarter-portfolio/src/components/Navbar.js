import React, { useState } from 'react';

export default function Navbar({ onNavbarLinkClick }) {
  const [activeLink, setActiveLink] = useState('About');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    onNavbarLinkClick(link);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1 className="navbar-brand-name">Collin McCarter</h1>
      </div>

      <ul className="navbar-menu">
        <li
          className={`navbar-menu-item ${activeLink === 'About' ? 'active' : ''}`}
          onClick={() => handleLinkClick('About')}
        >
          About Me
        </li>
        <li
          className={`navbar-menu-item ${activeLink === 'Projects' ? 'active' : ''}`}
          onClick={() => handleLinkClick('Projects')}
        >
          Portfolio
        </li>
        <li
          className={`navbar-menu-item ${activeLink === 'Contact' ? 'active' : ''}`}
          onClick={() => handleLinkClick('Contact')}
        >
          Contact
        </li>
        <li
          className={`navbar-menu-item ${activeLink === 'Resume' ? 'active' : ''}`}
          onClick={() => handleLinkClick('Resume')}
        >
          Resume
        </li>
      </ul>
    </nav>
  );
}
