import React, { useState } from 'react';
import Header from './Header';
import Category from './Category';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

const Home = ({ onToggleDarkMode }) => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const addToCart = (meal) => {
    const existingItem = cart.find(item => item.idMeal === meal.idMeal);
    if (existingItem) {
      setCart(cart.map(item =>
        item.idMeal === meal.idMeal ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...meal, quantity: 1, price: 8.45 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.idMeal !== id));
  };

  const handleSearch = (term) => {
    if (term.trim() === '') {
      setSearchTerm('');
      setSelectedCategory('');
    } else {
      setSearchTerm(term);
      setSelectedCategory(''); 
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchTerm('');
  };

  return (
    <div className="home">
      <Header 
        cartItemCount={cart.length} 
        onSearch={handleSearch}
        onToggleDarkMode={onToggleDarkMode}
      />
      <main>
        <section className="hero">
          <div className="hero-text">
            <p className="discount">Discount up to 20%</p>
            <h1>Buy Fresh And Organic Grocery Food</h1>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur. Condimentum sed sed blandit purus nec nibh tortor ipsum. Placerat consequat lorem.
            </p>
            <button className="shop-now-button">SHOP NOW →</button>
            <div className="statistics">
              <div className="stat">
                <span className="stat-number">35k +</span>
                <span className="stat-label">Users</span>
              </div>
              <div className="stat">
                <span className="stat-number">18k +</span>
                <span className="stat-label">Products</span>
              </div>
            </div>
          </div>
        </section>
        <Category onCategorySelect={handleCategorySelect} />
        <ProductList 
          addToCart={addToCart} 
          searchTerm={searchTerm} 
          selectedCategory={selectedCategory}
        />
        <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
      </main>
    </div>
  );
};

export default Home;