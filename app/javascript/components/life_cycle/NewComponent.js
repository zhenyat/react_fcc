import React from "react"
import PropTypes from "prop-types"

export default class NewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout( () => {
      this.setState({
        activeUsers: Math.floor(Math.random() * 10000)
      });
    }, 2500);
  }
  render () {
    return (
      <React.Fragment>
        <h4>Active Users (after 2.5 sec): { this.state.activeUsers }</h4>
      </React.Fragment>
    );
  }
}

