import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import Controls from "../../components/Controls/Controls";
import Aux from "../../hoc/Aux";

export default class BurgerScreen extends Component {
  state = {
    ingredients: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <Controls />
      </Aux>
    );
  }
}
