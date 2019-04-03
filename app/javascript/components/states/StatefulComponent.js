import React     from "react"
import PropTypes from "prop-types"

export default class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Zhenya'};  // Initialize state heer
  }
  
  render () {
    const altWayName = this.state.name
    return (
      <React.Fragment>
      <h4>Direct rendering: {this.state.name}</h4>
      <p>or: </p>
      <h4>Alternative rendering: {altWayName}</h4>
      
      </React.Fragment>
    );
  }
}
