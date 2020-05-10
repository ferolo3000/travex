import React from 'react';
import ReactDOM from 'react-dom';

import './login.scss';

class SignupWidget extends React.Component {

  render() {
    return (
      <div className="col-md-6">
        <form>
          <div className="text-center mt-4">
            <h2 className="title mb-4">Sign up</h2>
          </div>
          <label className="mb-3">
            <input type="text" placeholder="Email Address" />
          </label>
          <label className="mb-3">
            <input type="text" placeholder="Username" />
          </label>
          <label className="mb-3">
            <input type="password" placeholder="Password" />
          </label>
          <button className="red" type="button">Sign Up</button>
        </form>
          <p className="text-center">Already have an account? <a className="text-primary link" onClick={this.props.toggle}>Log in</a></p>
      </div>
    )
  }

}

export default SignupWidget
