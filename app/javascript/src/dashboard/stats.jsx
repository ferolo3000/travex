import React, { PureComponent } from 'react';
import BarGraph from "./charts/bargraph"
import PieGraph from "./charts/piegraph"

import './dashboard.scss';

class Stats extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="text-center mt-3">
          <h2 className="title mb-2">Statistics</h2>
        </div>
        <div className="cards-stats">
          <div className="container">
            <div className="row align-items-stretch">
              <div className="c-dashboardInfo col-lg-3 col-md-6">
                <div className="wrap">
                  <h4 className="heading hind-font medium-font-weight stats-title">Portfolio Balance</h4><span className="hind-font caption-12 stats-count">$10,500</span>
                </div>
              </div>
              <div className="c-dashboardInfo col-lg-3 col-md-6">
                <div className="wrap">
                  <h4 className="heading hind-font medium-font-weight stats-title">Some Data</h4><span className="hind-font caption-12 stats-count">$500</span><span
                    className="hind-font caption-12 stats-subInfo">Last month: $30</span>
                </div>
              </div>
              <div className="c-dashboardInfo col-lg-3 col-md-6">
                <div className="wrap">
                  <h4 className="heading hind-font medium-font-weight stats-title">Some Data</h4><span className="hind-font caption-12 stats-count">$5000</span>
                </div>
              </div>
              <div className="c-dashboardInfo col-lg-3 col-md-6">
                <div className="wrap">
                  <h4 className="heading hind-font medium-font-weight stats-title">Some Data</h4><span className="hind-font caption-12 stats-count">6,40%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-4">
            <h4 className="text-center">Chart Title</h4>
            <BarGraph />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="text-center">Chart Title</h4>
            <PieGraph />
          </div>
        </div>
      </div>
    )
  }

}

export default Stats
