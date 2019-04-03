import React     from "react"
import PropTypes from "prop-types"

const displayStyle = {
  width: 235,
  margin: 5,
  backgroundColor: "lightyellow"
};

export default class NewComponent extends React.Component {
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
    return (
       <React.Fragment>
         <button style={displayStyle} onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h3 style={displayStyle} >Displayed!</h3>}
       </React.Fragment>
    );
  }
}

