import React     from "react"
import PropTypes from "prop-types"

export default class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'CamperBot'};
  }
  render() {
    return(
       <React.Fragment>
         <Navbar name={this.state.name} />
       </React.Fragment>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
    <div>
      <h3>Hello, my name is: {this.props.name} </h3>
    </div>
    );
  }
};
