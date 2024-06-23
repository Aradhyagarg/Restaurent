import React, { useState } from 'react';

const Header = ({ cartItemCount, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    if (searchTerm.trim() === '') {
      setSearchTerm('');
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>GO FOOD</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>Groceries</li>
          <li>Pages</li>
        </ul>
      </nav>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search meals..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="header-right">
        <span>Connect with us</span>
        <div className="icons">
          <i className="icon-facebook"></i>
          <i className="icon-twitter"></i>
          <i className="icon-instagram"></i>
          <i className="icon-cart"></i>
        </div>
        <div className="cart-icon">
          Cart: {cartItemCount}
        </div>
      </div>
    </header>
  );
};

export default Header;