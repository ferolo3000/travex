import React from 'react';
import ReactDOM from 'react-dom';

import './login.scss';

class LoginWidget extends React.Component {

  render() {
    return (
      <div className="col-md-6">
        <form>
          <div className="text-center mt-4">
            <h2 className="title mb-4">Log In</h2>
          </div>
          <label className="mb-3">
            <input type="text" placeholder="Username" />
          </label>
          <label className="mb-3">
            <input type="password" placeholder="Password" />
          </label>
          <button className="red" type="button">Log In</button>
        </form>
          <p className="text-center">Don't have an account? <a className="text-primary link" onClick={this.props.toggle}>Sign up</a></p>
      </div>
    )
  }

}

export default LoginWidget
