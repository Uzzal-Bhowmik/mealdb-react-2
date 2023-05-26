import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import "./MealsCart.css";

const MealsCart = ({ mealsCart }) => {
  return (
    <div>
      <div className="meals-cart">
        <h1>
          <FontAwesomeIcon icon={faUtensils} className="me-3" />
          Orders: {mealsCart.length}
        </h1>

        {/* ordered meals */}
        {mealsCart.length ? (
          <ul>
            {mealsCart.map((meal) => (
              <li>{meal.strMeal}</li>
            ))}
          </ul>
        ) : (
          <h5 className="text-center mt-3">No Item Ordered :(</h5>
        )}
      </div>
    </div>
  );
};

export default MealsCart;
