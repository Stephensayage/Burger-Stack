import React from "react";
import classes from "./Control.css";

export default function Control(props) {
  return (
    <div className={classes.Control}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Add} onClick={props.addIngredient}>
        +
      </button>
      <span>{props.ingredients}</span>
      <button
        className={classes.Subtract}
        onClick={props.removeIngredient}
        disabled={props.disabled}
      >
        -
      </button>
    </div>
  );
}
