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
/*import React from 'react';

const Category = () => {
  return (
    <section className="category-section">
      <h2>Shop by Category</h2>
      <h1>Top Category Of Organic Food</h1>
      <div className="categories">
        <button>Fruits and Vegetables</button>
        <button>Bakery</button>
        <button>Meat and Seafood</button>
        <button>Beverage</button>
        <button>Biscuit and Snacks</button>
      </div>
    </section>
  );
}

export default Category;*/