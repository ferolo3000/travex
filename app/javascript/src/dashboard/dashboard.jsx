import React from 'react';
import ReactDOM from 'react-dom';

import './dashboard.scss';

class Dashboard extends React.Component {
  render() {
    return(
    <React.Fragment>
      <div class="sidebar-container">
        <div class="sidebar-logo">
          Project Name
        </div>
        <ul class="sidebar-navigation">
          <li class="header">Navigation</li>
          <li>
            <a href="#">
              <i class="fa fa-home" aria-hidden="true"></i> Homepage
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard
            </a>
          </li>
          <li class="header">Another Menu</li>
          <li>
            <a href="#">
              <i class="fa fa-users" aria-hidden="true"></i> Friends
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-cog" aria-hidden="true"></i> Settings
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-info-circle" aria-hidden="true"></i> Information
            </a>
          </li>
        </ul>
      </div>

      <div class="content-container">
        <div class="container-fluid">
          <div class="jumbotron">
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
