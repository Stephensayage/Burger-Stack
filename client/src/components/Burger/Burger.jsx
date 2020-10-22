import React from "react";
import classes from "./Burger.css";
import Ingredients from "./Ingredients/Ingredients";

export default function Burger(props) {
  return (
    <div className={classes.Burger}>
      <Ingredients type="bread-top" />
      <Ingredients type="lettuce" />
      <Ingredients type="tomatoe" />
      <Ingredients type="cheese" />
      <Ingredients type="bacon" />
      <Ingredients type="meat" />
      <Ingredients type="bread-bottom" />
    </div>
  );
}
