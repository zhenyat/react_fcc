import React from "react"
import PropTypes from "prop-types"

const Items = (props) => {
  return <h3>PropTypes: Now Qty of Items in Cart: {props.quantity}</h3>;
};

Items.propTypes = {quantity: PropTypes.number.isRequired};

Items.defaultProps = {
  quantity: 0 
};

export default class MoreShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <React.Fragment>      
        <Items quantity={20}/>
      </React.Fragment>
    );
  }
};
