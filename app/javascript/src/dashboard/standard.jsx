import React from "react";

import './dashboard.scss';

class Standard extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="text-center mt-3">
          <h2 className="title mb-3">Dashboard</h2>
        </div>
        <div className="row">
          <div className="col-md-4 text-center mt-3">
            <div class="card card-dashboard">
              <div class="card-body">
                <a href="#" id="expense-link">
                  <svg className="bi bi-file-earmark-text mr-3" width="4em" height="4em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 1h5v1H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6h1v7a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2z" />
                    <path d="M9 4.5V1l5 5h-3.5A1.5 1.5 0 019 4.5z" />
                    <path fillRule="evenodd" d="M5 11.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm0-2a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0-2a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                  </svg>
                  <h3 className="mt-2">Add Expense</h3>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center mt-3">
            <div class="card card-dashboard">
              <div class="card-body">
                <a href="#" id="stats-link">
                  <svg className="bi bi-clipboard-data mr-3" width="4em" height="4em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M9.5 1h-3a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z" clipRule="evenodd" />
                    <path d="M4 11a1 1 0 112 0v1a1 1 0 11-2 0v-1zm6-4a1 1 0 112 0v5a1 1 0 11-2 0V7zM7 9a1 1 0 012 0v3a1 1 0 11-2 0V9z" />
                  </svg>
                  <h3 className="mt-2">Check Stats</h3>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center mt-3">
            <div class="card card-dashboard">
              <div class="card-body">
                <a href="#" id="report-link">
                  <svg className="bi bi-layout-text-window-reverse mr-3" width="4em" height="4em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2 1h12a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1zm12-1a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h12z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M5 15V4H4v11h1zM.5 4h15V3H.5v1zM13 6.5a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h5a.5.5 0 00.5-.5zm0 3a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h5a.5.5 0 00.5-.5zm0 3a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h5a.5.5 0 00.5-.5z"
                      clipRule="evenodd" />
                  </svg>
                  <h3 className="mt-2">See Report</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div class="card card-summary mt-5">
          <div class="card-header">Summary</div>
            <div className="row">
              <div class="col-md-4 card-body  text-center">
                <p class="card-count">1</p>
                <p class="card-text">EXPENSES</p>
              </div>
              <div class="col-md-4 card-body  text-center">
                <p class="card-count">$2.500</p>
                <p class="card-text">SPENT</p>
              </div>
              <div class="col-md-4 card-body  text-center">
                <p class="card-count">3</p>
                <p class="card-text">LOCATIONS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Standard
