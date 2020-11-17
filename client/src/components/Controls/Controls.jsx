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
      {ctrl.map((control) => (
        <Control
          key={control.label}
          label={control.label}
          type={control.type}
        />
      ))}
    </div>
  );
}
