import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";

export default function Layout(props) {
  return (
    <Aux>
      <div>Toolbar, sidedrawer, backdrop</div>
      <main className={classes.Container}>{props.children}</main>
    </Aux>
  );
}
