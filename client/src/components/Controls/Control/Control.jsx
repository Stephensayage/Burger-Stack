import React from "react";
import classes from "./Control.css";

export default function Control(props) {
  return (
    <div className={classes.Control}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Add}>+</button>
      <span>0</span>
      <button className={classes.Subtract}>-</button>
    </div>
  );
}
