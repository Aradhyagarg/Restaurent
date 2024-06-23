import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductList = ({ addToCart, searchTerm, selectedCategory }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        let url;
        if (searchTerm) {
          url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
        } else if (selectedCategory) {
          url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
        } else {
          url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
        }
        const response = await axios.get(url);
        setMeals(response.data.meals || []);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchMeals();
  }, [searchTerm, selectedCategory]);

  return (
    <section className="product-list">
      <div className="product-items">
        {meals.map(meal => (
          <ProductCard key={meal.idMeal} meal={meal} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;