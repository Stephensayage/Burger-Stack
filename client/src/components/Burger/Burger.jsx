import React from "react";
import classes from "./Burger.css";
import Ingredients from "./Ingredients/Ingredients";

export default function Burger(props) {
  const burgerIngredients = Object.keys(props.ingredients).map((ingredient) => {
    return [...Array(props.ingredients[ingredient])].map((el, idx) => {
      return <Ingredients key={ingredient + idx} type={ingredient} />;
    });
  });

  return (
    <div className={classes.Burger}>
      <Ingredients type="bread-top" />
      {burgerIngredients}
      <Ingredients type="bread-bottom" />
    </div>
  );
}
