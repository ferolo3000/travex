import React from 'react';
import ReactDOM from 'react-dom';

import './dashboard.scss';

class Dashboard extends React.Component {
  render() {
    return(
    <React.Fragment>
      <div className="sidebar-container">
        <div className="sidebar-logo">
          travex
        </div>
        <div>
          <ul className="sidebar-navigation mt-5">
            <li>
              <a href="#" className="link-db">
                Username
              </a>
            </li>
          </ul>
          <ul className="sidebar-navigation mt-5">
            <li>
              <a href="#" className="link-db">
                 Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="link-db">
                 Expenses
              </a>
            </li>
            <li>
              <a href="#" className="link-db">
                 Stats
              </a>
            </li>
            <li>
              <a href="#" className="link-db">
                 Report
              </a>
            </li>
          </ul>
          <ul className="sidebar-navigation mt-5">
            <li>
              <a href="#" className="link-db">
                 Privacy & Security
              </a>
            </li>
            <li>
              <a href="#" className="link-db">
                 Log Out
              </a>
            </li>
          </ul>
        </div>
        <footer class="footer">
          <div class="container mb-2">
            <small>Collapse menu</small>
          </div>
        </footer>
      </div>

      <div className="content-container">
        <div className="container-fluid">
          <div className="jumbotron">
            <h1>Navbar example</h1>
            <p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
            <p>To see the difference between static and fixed top navbars, just scroll.</p>
            <p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
            <p>To see the difference between static and fixed top navbars, just scroll.</p>
            <p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
            <p>To see the difference between static and fixed top navbars, just scroll.</p>
            <p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
            <p>To see the difference between static and fixed top navbars, just scroll.</p>
            <p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>
            <p>To see the difference between static and fixed top navbars, just scroll.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
    )
  }
}

export default Dashboard;
