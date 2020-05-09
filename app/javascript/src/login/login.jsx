// login.jsx
import React from 'react';
import ReactDOM from 'react-dom';


import './login.scss';

class Login extends React.Component {
  render() {
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
              <p className="text-center">Already have an account? <a className="text-primary" onClick={this.props.toggle}>Log in</a></p>
          </div>
        </div>
      </div>
      </React.Fragment>
    )
  }

}

export default Login;
