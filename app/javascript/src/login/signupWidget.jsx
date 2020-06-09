import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

import './login.scss';

class SignupWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      error: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSignup(e) {
    if (e) { e.preventDefault(); }
    this.setState({
      error: '',
    });

    fetch(`/api/users`, safeCredentials({
      method: 'POST',
      body: JSON.stringify({
        user: {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        }
      })
    }))
    .then(handleErrors)
      .then(data => {
        if (data.user) {
          this.login();
        }
      })
      .catch(error => {
        this.setState({
          error: 'Could not sign up.',
        })
      })
  }

  render() {
    return (
      <div className="col-lg-6 col-md-12">
        <form  onSubmit={this.handleSignup}>
          <div className="text-center mt-4">
            <h2 className="title mb-4">Sign up</h2>
          </div>
          <label className="mb-3">
            <input type="text" placeholder="Email Address"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required/>
          </label>
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
          <button className="red" type="button">Sign Up</button>
        </form>
          <p className="text-center">Already have an account? <a className="text-primary link" onClick={this.props.toggle}>Log in</a></p>
      </div>
    )
  }

}

export default SignupWidget
