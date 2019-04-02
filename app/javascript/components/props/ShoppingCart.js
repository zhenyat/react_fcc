import React     from "react"
import PropTypes from "prop-types"

const Items = (props) => {
  return(
    <h3>Current qty of Items in Cart: {props.quantity}</h3>    
  );
};
Items.defaultProps = {quantity: 0};

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <React.Fragment>
        <Items quantity={10} />
      </React.Fragment>
    );
  }
};
