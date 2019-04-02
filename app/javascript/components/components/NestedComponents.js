import React     from "react"
import PropTypes from "prop-types"

const TypesOfFruit = () => {
  return(
    <React.Fragment>
      <h2>Fruites:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </React.Fragment>
  );
};

const Fruits = () => {
  return (
    <React.Fragment>
      <TypesOfFruit />
    </React.Fragment>
  );
};

class NestedComponents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Types of Food (Nested Components)</h1>
        < Fruits />
      </React.Fragment>
    );
  }
};

export default NestedComponents
