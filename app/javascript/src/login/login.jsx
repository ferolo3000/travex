// login.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import LoginWidget from './loginWidget';
import SignupWidget from './signupWidget';

import './login.scss';

class Login extends React.Component {
  state = {
    show_login: true,
  }

  toggle = () => {
    this.setState({
      show_login: !this.state.show_login,
    })
  }

  render() {
      const { show_login } = this.state;
    return (
      <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">travex</span>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div>
              <h2 className="mt-5 title">This is a title</h2>
            </div>
            <div>
              <p className="mt-3 content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim blandit volutpat maecenas volutpat. Est ultricies integer quis auctor elit sed vulputate mi sit. Ac turpis egestas maecenas pharetra. Nisi est sit amet facilisis magna etiam. Eleifend mi in nulla posuere sollicitudin. Elementum sagittis vitae et leo duis ut diam. Velit aliquet sagittis id consectetur purus ut faucibus. Odio euismod lacinia at quis risus. Odio eu feugiat pretium nibh ipsum consequat nisl.
              </p>
            </div>
          </div>
          {show_login ? <LoginWidget toggle={this.toggle} /> : <SignupWidget toggle={this.toggle} />}
        </div>
      </div>
      </React.Fragment>
    )
  }

}

export default Login;
