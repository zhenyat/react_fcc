import React     from "react"
import PropTypes from "prop-types"

const List= (props) => {
  return <p>{props.tasks}</p>;
//return <p>{props.tasks.join(', ')}</p>; // error: Cannot read property 'join' of undefined
                                          // Workout: usr `join` in ToDo component
};

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <h1>To Do Lists</h1>
        
        <h2>Today</h2>
        <List tasks={["walk dog", "workout"].join(', ')}/>
        
        <h2>Tomorrow</h2>
        <List tasks={["write report", "visit dentist", "meet friends"].join(', ')}/>
      </React.Fragment>
    );
  }
};

