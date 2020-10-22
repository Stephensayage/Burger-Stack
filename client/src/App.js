import React, { Component } from "react";
import Layout from "./components/layout/Layout";
import BurgerScreen from "./screens/BurgerScreen/BurgerScreen";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <h1>Welcome to Burger Shack</h1>
          <BurgerScreen />
        </Layout>
      </div>
    );
  }
}

export default App;
