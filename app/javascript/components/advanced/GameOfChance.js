import React     from "react"
import PropTypes from "prop-types"

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <h1>{this.props.fiftyFifty}
      </h1>
    );
  };
};

export default class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({counter: this.state.counter + 1});
  }
  render() {
    let expression =  (Math.random() > 0.5);
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>Play Again</button>
        {expression ? <Results fiftyFifty='You Win!' /> : <Results fiftyFifty='You Lose!' />}
        <p>{'Turn: ' + this.state.counter}</p>
      </React.Fragment>
    );
  }
};
