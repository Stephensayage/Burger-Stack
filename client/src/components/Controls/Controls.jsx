import React from "react";
import Control from "./Control/Control";
import classes from "./Controls.css";

export default function Controls(props) {
  const ctrl = [
    { label: "Lettuce", type: "lettuce" },
    { label: "Meat", type: "meat" },
    { label: "Bacon", type: "bacon" },
    { label: "Tomatoe", type: "tomatoe" },
    { label: "Cheese", type: "cheese" },
  ];

  return (
    <div className={classes.Controls}>
      <div className={classes.PriceCtn}>
        <span className={classes.Price}>Price ${props.price.toFixed(2)}</span>
      </div>
      {ctrl.map((control) => (
        <Control
          ingredients={props.ingredients[control.type]}
          addIngredient={() => props.addIngredient(control.type)}
          removeIngredient={() => props.removeIngredient(control.type)}
          disabled={props.disabled[control.type]}
          key={control.label}
          label={control.label}
        />
      ))}
      <button className={classes.OrderButton} disabled={!props.canCheckout}>
        Checkout
      </button>
    </div>
  );
}
