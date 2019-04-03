import React     from "react"
import PropTypes from "prop-types"

const displayStyle = {
  width: 235,
  margin: 5,
  backgroundColor: "lightgreen"
};

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    if (this.state.display)
      return (
        <React.Fragment>
          <button style={displayStyle} onClick={this.toggleDisplay}>Toggle Display</button>
          <h3 style={displayStyle} >Displayed!</h3>
        </React.Fragment>
      );
    else
      return (
        <React.Fragment>
          <button style={displayStyle} onClick={this.toggleDisplay}>Toggle Display</button>
        </React.Fragment>
      );
  }
};

