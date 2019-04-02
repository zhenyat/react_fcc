import React from "react"
import PropTypes from "prop-types"

class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <React.Fragment>
        <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
      </React.Fragment>
    );
  }
}

export default class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <React.Fragment>
        <h2>Reset Password</h2>
        <h3>We've generated a new temporary password for you.</h3>
        <h3>Please reset this password from your account settings ASAP.</h3>
        <ReturnTempPassword tempPassword="Tmp-Password" />
      </React.Fragment>
    );
  }
}
