import React     from "react"
import PropTypes from "prop-types"

const CurrentDate = (props) => {
  return (
    <React.Fragment>
      <p>The current date is: {props.date}</p>
    </React.Fragment>
  );
};

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <React.Fragment>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()} />
      </React.Fragment>
    );
  }
};
