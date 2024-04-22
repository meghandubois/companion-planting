import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Welcome!</h1>
      <nav>
        <ul>
          <li><a href="/library">Library</a></li>
          <li><a href="/account">Login/Signup</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
