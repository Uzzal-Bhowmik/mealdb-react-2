import React, { useState } from "react";
import "./Main.css";
import MealsContainer from "../MealsContainer/MealsContainer";
import MealsCart from "../MealsCart/MealsCart";

const Main = () => {
  const [mealsCart, setMealsCart] = useState([]);

  const handleOrderMeal = (meal) => {
    setMealsCart([...mealsCart, meal]);
  };

  return (
    <div className="main my-5">
      {/* Meals Container */}
      <MealsContainer handleOrderMeal={handleOrderMeal}></MealsContainer>

      {/* Ordered Meals Cart */}
      <MealsCart mealsCart={mealsCart}></MealsCart>
    </div>
  );
};

export default Main;
