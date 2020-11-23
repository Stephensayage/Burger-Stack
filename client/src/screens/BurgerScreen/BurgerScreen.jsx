import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import Controls from "../../components/Controls/Controls";
import Modal from "../../components/layout/UI/Modal";
import Aux from "../../hoc/Aux";

const BURGER_PRICES = {
  lettuce: 0.25,
  cheese: 0.5,
  bacon: 1.5,
  meat: 1.5,
  tomatoe: 0.75,
};

export default class BurgerScreen extends Component {
  state = {
    ingredients: {
      lettuce: 0,
      tomatoe: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    price: 3.25,
    canCheckout: false,
  };

  updateCheckoutState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((key) => {
        return ingredients[key];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    console.log(sum);
    this.setState({ canCheckout: sum > 0 });
  }

  addIngredient = (type) => {
    const currentCount = this.state.ingredients[type];
    const newCount = currentCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = newCount;
    const tallyCost = BURGER_PRICES[type];
    const newPrice = this.state.price + tallyCost;
    this.setState({
      ingredients: updatedIngredients,
      price: newPrice,
    });
    this.updateCheckoutState(updatedIngredients);
  };

  removeIngredient = (type) => {
    const currentCount = this.state.ingredients[type];
    if (currentCount <= 0) {
      return;
    }
    const newCount = currentCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = newCount;
    const tallyCost = BURGER_PRICES[type];
    const newPrice = this.state.price - tallyCost;

    this.setState({
      ingredients: updatedIngredients,
      price: newPrice,
    });
    this.updateCheckoutState(updatedIngredients);
  };

  render() {
    const disableButton = {
      ...this.state.ingredients,
    };
    for (let key in disableButton) {
      disableButton[key] = disableButton[key] <= 0;
    }

    return (
      <Aux>
        <Modal />
        <Burger ingredients={this.state.ingredients} />
        <Controls
          price={this.state.price}
          ingredients={this.state.ingredients}
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          disabled={disableButton}
          canCheckout={this.state.canCheckout}
        />
      </Aux>
    );
  }
}
