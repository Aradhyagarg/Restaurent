import React from 'react';

const ShoppingCart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.idMeal} className="cart-item">
          <img src={item.strMealThumb} alt={item.strMeal} />
          <div>
            <h3>{item.strMeal}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.idMeal)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="cart-total">
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default ShoppingCart;