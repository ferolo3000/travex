import React, { PureComponent } from 'react';

import './dashboard.scss';

class Stats extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        expenses: []
      }
  }

  componentDidMount() {
    fetch('/api/expenses')
    .then(response => response.json())
    .then(data => this.setState({ expenses: data.expenses }))
  }

  render() {
    return (
      <div className="card card-summary mt-5">
        <div className="card-header">
          <div className="row">
            <div className="col-sm-6">
              Expense Summary
            </div>
            <div className="col-sm-6">
              <div className="input-group search-form">
                <input type="text" className="form-control" placeholder="Search Location..." aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">Go</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-1">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-4 card-body  text-center">
                <p className="card-count">$3.000</p>
                <img src="https://img.icons8.com/fluent/48/000000/purchase-order.png" />
                <p className="category-txt">All Expenses</p>
              </div>
              <div className="col-sm-4 card-body  text-center">
                <p className="card-count">$1.200</p>
                <img src="https://img.icons8.com/emoji/48/000000/airplane-emoji.png" />
                <p className="category-txt">Air Travel</p>
              </div>
              <div className="col-sm-4 card-body  text-center">
                <p className="card-count">$1.000</p>
                <img src="https://img.icons8.com/emoji/48/000000/hotel-emoji.png" />
                <p className="category-txt">Lodging</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-4 card-body  text-center">
                <p className="card-count">$500</p>
                <img src="https://img.icons8.com/emoji/48/000000/fork-and-knife-with-plate-emoji.png" />
                <p className="category-txt">Meals & Entertainment</p>
              </div>
              <div className="col-sm-4 card-body  text-center">
                <p className="card-count">$100</p>
                <img src="https://img.icons8.com/emoji/48/000000/mobile-phone-with-arrow.png" />
                <p className="category-txt">Phone & Internet</p>
              </div>
              <div className="col-sm-4 card-body  text-center">
                <p className="card-count">$200</p>
                <img src="https://img.icons8.com/emoji/48/000000/oncoming-taxi.png" />
                <p className="category-txt">Transportation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Stats
