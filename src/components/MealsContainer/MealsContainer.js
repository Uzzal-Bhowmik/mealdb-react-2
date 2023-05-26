import React, { useEffect, useState } from "react";
import "./MealsContainer.css";
import Meal from "../Meal/Meal";

const MealsContainer = ({ handleOrderMeal }) => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=p")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  return (
    <div className="meals-con p-2">
      <h1>Your Favorite Dishes: </h1>

      {/* Meals */}
      <div className="row gy-4 w-100 mx-auto mt-3">
        {meals.map((meal) => (
          <Meal
            key={meal.idMeal}
            meal={meal}
            handleOrderMeal={handleOrderMeal}
          ></Meal>
        ))}
      </div>
    </div>
  );
};

export default MealsContainer;
