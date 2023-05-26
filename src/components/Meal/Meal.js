import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./Meal.css";

const Meal = ({ meal, handleOrderMeal }) => {
  let { strMeal, strInstructions, strMealThumb } = meal;

  let slicedStrInstructions = strInstructions.slice(0, 200);

  return (
    <div className="col-4">
      <div className="card" style={{ width: "20rem", height: "40rem" }}>
        <img
          src={strMealThumb}
          className="card-img-top border rounded"
          alt={strMeal}
        ></img>
        <div className="card-body position-relative">
          <h5 className="card-title">{strMeal}</h5>
          <p className="card-text">{slicedStrInstructions}</p>

          <button
            className="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x mb-3 w-75"
            onClick={() => handleOrderMeal(meal)}
          >
            <FontAwesomeIcon icon={faCartPlus} className="me-2" />
            Order Meal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meal;
