import React     from "react"
import PropTypes from "prop-types"

const Vegetables = () => {
  return(
    <React.Fragment>
      <h2>Vegetables:</h2>
      <ul>
        <li>Brussel Sprouts</li>
        <li>Broccoli</li>
        <li>Squash</li>
        <li>Potato</li>
      </ul>
    </React.Fragment>
  );
};

const NonCitrus = () => {
  return(
    <React.Fragment>
      <h3>NonCitrus:</h3>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </React.Fragment>
  );
};

const Citrus = () => {
  return(
    <React.Fragment>
      <h3>Citrus:</h3>
      <ul>
        <li>Lemon</li>
        <li>Lime</li>
        <li>Orange</li>
        <li>Grapefruit</li>
      </ul>
    </React.Fragment>
  );
};

class Fruits extends React.Component {
  constructor(props) {
      super(props);
    }
  
  render () {
    return (
      <React.Fragment>
        <h2>Fruits</h2>
        <NonCitrus />
        <Citrus />
      </React.Fragment>
    );
  }
};

export default class ComposedComponents extends React.Component {
 constructor(props) {
    super(props);
  }
 
  render () {
    return (
      <React.Fragment>
        <h1>Types of Food (Composed Components)</h1>
        <Fruits />
        <Vegetables />
      </React.Fragment>
    );
  }
};

