import React from 'react';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#1C1C1E', color: '#B08D57', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/MaatiMapLogo.png" alt="MaatiMap Logo" style={{ height: '50px', marginRight: '10px' }} />
        <h1 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>MaatiMap</h1>
      </div>

      <nav>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex' }}>
          <li style={{ marginRight: '20px' }}>
            <a href="#" style={{ color: '#B08D57', textDecoration: 'none' }}>Art</a>
          </li>
          <li style={{ marginRight: '20px' }}>
            <a href="#" style={{ color: '#B08D57', textDecoration: 'none' }}>Food</a>
          </li>
          <li style={{ marginRight: '20px' }}>
            <a href="#" style={{ color: '#B08D57', textDecoration: 'none' }}>Heritage</a>
          </li>
          <li style={{ marginRight: '20px' }}>
            <a href="#" style={{ color: '#B08D57', textDecoration: 'none' }}>Rituals</a>
          </li>
          <li style={{ marginRight: '20px' }}>
            <a href="#" style={{ color: '#B08D57', textDecoration: 'none' }}>Music</a>
          </li>
          <li>
            <a href="#" style={{ color: '#B08D57', textDecoration: 'none' }}>Festivals</a>
          </li>
        </ul>
      </nav>

      <div>
        <a href="#" style={{ color: '#B08D57', textDecoration: 'none', marginRight: '20px' }}>Discover</a>
        <a href="#" style={{ color: '#B08D57', textDecoration: 'none', marginRight: '20px' }}>Feed</a>
        <a href="#" style={{ color: '#B08D57', textDecoration: 'none' }}>Bookmarks</a>
      </div>
    </header>
  );
};

export default Header;
