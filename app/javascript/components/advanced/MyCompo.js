import React     from "react"
import PropTypes from "prop-types"


export default class MyCompo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter(user => user.online); // change code here
    const renderOnline = usersOnline.map(user => <li key={user.username.charAt(0)}>{user.username}</li>); // change code here
    return (
       <React.Fragment>
         <h3>Current Online Users:</h3>
         <ul>
           {renderOnline}
         </ul>
       </React.Fragment>
    );
  }
};
