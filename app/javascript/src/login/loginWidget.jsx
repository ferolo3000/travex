import React from 'react';
import ReactDOM from 'react-dom';

import './login.scss';

class LoginWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  handleLogin(event) {
  event.preventDefault();
  const { username, password } = this.state;

  fetch(`/api/sessions`, safeCredentials({
    method: 'POST',
    body: JSON.stringify({
      user: {
        username: username,
        password: password
      }
    })
  }))
  .then(handleErrors)
  .then(res => {
    console.log(res);
      window.location.replace("/dashboard");
  })
}

  render() {
    return (
      <div className="col-lg-6 col-md-12">
        <form onSubmit={this.handleLogin}>
          <div className="text-center mt-4">
            <h2 className="title mb-4">Log In</h2>
          </div>
          <label className="mb-3">
            <input type="text" placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required/>
          </label>
          <label className="mb-3">
            <input type="password" placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required/>
          </label>
          <button className="red" type="button">Log In</button>
          {this.state.error && <p className="text-danger mt-2">{this.state.error}</p>}
        </form>
          <p className="text-center">Don't have an account? <a className="text-primary link" onClick={this.props.toggle}>Sign up</a></p>
      </div>
    )
  }

}

export default LoginWidget
