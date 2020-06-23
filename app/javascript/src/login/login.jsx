// login.jsx
import React from 'react';
import LoginWidget from './loginWidget';
import SignupWidget from './signupWidget';
import { handleErrors } from '@utils/fetchHelper';

import './login.scss';

class Login extends React.Component {
  state = {
    authenticated: false,
    show_login: true,
    role: ''
  }

  /*componentDidMount() {
    fetch('/api/authenticated')
      .then(handleErrors)
      .then(data => {
        this.setState({
          authenticated: data.authenticated,
          role: data.role
        })
      })
  }*/

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
          <span className="navbar-brand mb-0 h1" id="brand">travex</span>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div>
                <h2 className="mt-5 title">Report expenses easily</h2>
              </div>
              <div>
                <p className="mt-3 content">Improve Productivity & Gain Control over Business Expenses.</p>
                <p className="mt-3 content">
                  Travex helps you to record your expense during traveling, i.e. on a business trip, an out of the office appointment or a person vacation. You can track travel expenses and approve travel spending for employees on the go.
                </p>
              </div>
            </div>
            {show_login ?
            <LoginWidget toggle={this.toggle} /> :
            <SignupWidget toggle={this.toggle} />}
          </div>
          <div className="section-img mt-3 p-2">
          <div className="horizontal-line mb-5"></div>
          <h1 className="title mt-1 mb-4 text-center">An App your team will love</h1>
            <div className="card-summarys mt-5 mb-5">
              <div className="row">
                <div className="col-lg-3 col-sm-5">
                  <div className="card-summary icon-list p-2">
                    <div className="column-icon-list">
                      <img className="card-summary-icon" src="https://img.icons8.com/nolan/64/time-machine.png" alt="expense management solution" title="" />
                      <p className="text-right p-2 content card-text">Speed up your expense report</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-2">
                  <div className="circle">
                    <img className="img responsive mb-3" src="https://travexapp.s3.amazonaws.com/ipad-img-screen.png" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-5">
                  <div className="card-summary icon-list p-2">
                    <div className="column-icon-list">
                      <img className="card-summary-icon" src="https://img.icons8.com/nolan/64/paper.png" alt="expense management" title="" />
                      <p className="text-right p-2 content card-text">100% paperless & mobile</p>
                    </div>
                  </div>
                  <div className="card-summary icon-list p-2 mt-5">
                    <div className="column-icon-list">
                      <img className="card-summary-icon" src="https://img.icons8.com/nolan/64/used-product.png" alt="expense management solution" title="" />
                      <p className="text-right p-2 content card-text">Easy to use</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 about">
              <div className="mt-5 p-2">
              <h3 className="about-txt">About me</h3>
                <p className="about-txt">Hi, I’m Fernanda. Before getting into coding, I completed a Bachelor’s degree in business administration and have worked several years with data analysis. However, I always felt that I was not on the right path until I started writing my first code. From that time, I knew what was in my future, why I started different modules to gather more knowledge about coding and finally I signed up for a bootcamp at <a href="www.altcademy.com" target="_blank">Altcademy</a>. My dream is to work as a software developer, building software for businesses.</p>
                <p className="about-txt">This is my Capstone Project, any feedback would be appreciated</p>
              </div>
              <div className="p-2">
                <p  className="about-txt">Get in touch:</p>
                <a href="https://github.com/ferolo3000/travex" target="_blank" className="navbar-brand mb-0 h1 text-right"><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" /></a>
                <a href="https://www.linkedin.com/in/fernandaromerolo/" target="_blank" className="navbar-brand mb-0 h1 text-right"><img src="https://img.icons8.com/android/24/000000/linkedin.png"/></a>
                <a href="https://fernanda-romero.netlify.app/" target="_blank" className="navbar-brand mb-0 h1 text-right"><img src="https://img.icons8.com/windows/32/000000/internet.png"/></a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Login;
