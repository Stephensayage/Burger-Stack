import React from "react";
import classes from "./Burger.css";
import Ingredients from "./Ingredients/Ingredients";

export default function Burger(props) {
  let burgerIngredients = Object.keys(props.ingredients)
    .map((ingredient) => {
      return [...Array(props.ingredients[ingredient])].map((el, idx) => {
        return <Ingredients key={ingredient + idx} type={ingredient} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (burgerIngredients.length === 0) {
    burgerIngredients = <p>Start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <Ingredients type="bread-top" />
      {burgerIngredients}
      <Ingredients type="bread-bottom" />
    </div>
  );
}
