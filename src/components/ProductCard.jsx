import React from 'react';

const ProductCard = ({ meal, addToCart }) => {
  return (
    <div className="product-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{meal.strMeal}</h3>
        <p className="product-description">Lorem ipsum dolor sit amet quam in lacus risus.</p>
      </div>
      <div className="product-info">
        <p className="product-price">$8.45</p>
        <button className="product-button" onClick={() => addToCart(meal)}>SHOP NOW →</button>
      </div>
    </div>
  );
};

export default ProductCard;