import React from 'react';

const Category = ({ onCategorySelect }) => {
  const categories = ['Seafood', 'Vegetarian', 'Dessert', 'Breakfast', 'Chicken'];

  return (
    <section className="category-section">
      <h2>Shop by Category</h2>
      <h1>Top Category Of Organic Food</h1>
      <div className="categories">
        {categories.map(category => (
          <button key={category} onClick={() => onCategorySelect(category)}>
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Category;