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
        <div className="container-fluid content-section">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div>
                <h2 className="mt-5 title ml-5">Report expenses easily</h2>
              </div>
              <div>
                <p className="mt-3 content ml-5">Improve <span style={{fontWeight: 'bold'}}>Productivity</span> & <span style={{fontWeight: 'bold'}}>Gain Control</span> over Business Expenses.</p>
                <p className="mt-3 content ml-5">
                  <span style={{fontWeight: 'bold'}}>Travex</span> helps you to record your expense during traveling, i.e. on a business trip, an out of the office appointment or a person vacation.</p>
                <p className="mt-3 content ml-5">You can track travel expenses and approve travel spending for employees on the go.</p>  
              </div>
            </div>
            {show_login ?
            <LoginWidget toggle={this.toggle} /> :
            <SignupWidget toggle={this.toggle} />}
          </div>
          <div className="box-title">
            <div className="container mx-auto px-6">
              <h1 className="text-center font-bold mb-2 text-white">An App your team will love</h1>
            </div>
            <div className="section-img mt-3 p-2">
              <div className="card-summarys mt-2 mb-5">
                <div className="row">
                  <div className="col-lg-4 col-sm-4">
                    <div className="card-summary icon-list p-2 mt-1">
                      <div className="column-icon-list">
                        <img className="card-summary-icon" src="https://img.icons8.com/nolan/64/time-machine.png" alt="expense management solution" title="" />
                        <p className="text-right p-2 content card-text">Speed up your expense report</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    <div className="card-summary icon-list p-2 mt-1">
                      <div className="column-icon-list">
                        <img className="card-summary-icon" src="https://img.icons8.com/nolan/64/paper.png" alt="expense management" title="" />
                        <p className="text-right p-2 content card-text">100% paperless</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    <div className="card-summary icon-list p-2 mt-1">
                      <div className="column-icon-list">
                        <img className="card-summary-icon" src="https://img.icons8.com/nolan/64/used-product.png" alt="expense management solution" title="" />
                        <p className="text-right p-2 content card-text">Easy to use</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="container p-5">
          <div className="row">
            <div className="col-md-6">
              <h4 className="section-text mb-3">Add expenses easily</h4>
              <p className="text-gray-600 mb-5">
                Attach a receipt and enter the cost. You can sort expenses by category, payment method and write notes.
              </p>
            </div>
            <div className="col-md-6">
              <img className="section-img" src="https://travexapp.s3.amazonaws.com/add-img.png" alt="add" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <img className="section-img" src="https://travexapp.s3.amazonaws.com/submmit-img.png" alt="submit" />
            </div>
            <div className="col-md-6">
              <h4 className="section-text  mb-3">
                Submit Expense
              </h4>
              <p className="text-gray-600 mb-5">
              Submit expenses from a business trip or client visit on the go.
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <h4 className="section-text  mb-3">
              Approve/Reject in a click
              </h4>
              <p className="text-gray-600 mb-5">
                Filter expenses based on user and approve/rejected with a click.
              </p>
            </div>
            <div className="col-md-6">
              <img className="section-img" src="https://travexapp.s3.amazonaws.com/approve-img.png" alt="approve" />
            </div>
          </div>
        </section>
        <div className="box-title">
            <div className="container mx-auto px-6">
              <h1 className="text-center font-bold mb-2 text-white">Travex is the perfect tool for anyone who needs to keep track of receipts and expense management</h1>
            </div>
        </div>   
        <div className="mt-5 about">
          <div className="mt-5 p-2">
            <h3 className="about-txt ml-3">About me</h3>
            <p className="about-txt ml-3">Hi, I’m Fernanda.</p> 
            <p className="about-txt ml-3">Before getting into coding, I completed a Bachelor’s degree in business administration and have worked several years with data analysis. However, I always felt that I was not on the right path until I
              started writing my first code. From that time, I knew what was in my future, why I started different modules to gather more knowledge about coding and finally I signed up for a bootcamp at <span style={{fontWeight: 'bold'}}>Altcademy</span>. My dream is to work as a software developer building software for businesses.</p>
            <p className="about-txt ml-3">This is my Capstone Project, any feedback would be appreciated.</p>
          </div>
          <div className="p-2 ml-3">
            <p className="about-txt">Get in touch:</p>
            <a className="icon" href="https://github.com/ferolo3000/travex" target="_blank" className="navbar-brand mb-0 h1 text-right"><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" /></a>
            <a className="icon" href="https://www.linkedin.com/in/fernandaromerolo/" target="_blank" className="navbar-brand mb-0 h1 text-right"><img src="https://img.icons8.com/android/24/000000/linkedin.png" /></a>
            <a className="icon" href="https://fernanda-romero.netlify.app/" target="_blank" className="navbar-brand mb-0 h1 text-right"><img src="https://img.icons8.com/windows/32/000000/internet.png" /></a>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Login;
