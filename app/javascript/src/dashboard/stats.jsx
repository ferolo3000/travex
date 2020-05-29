import React from 'react';

import './dashboard.scss';

class Stats extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        expenses: [],
        search: []
      }
  }

  componentDidMount() {
    fetch('/api/expenses')
    .then(response => response.json())
    .then(data => this.setState({ expenses: data.expenses }))
  }

  render() {
    const { expenses } = this.state
    let options;
    if (this.state.search.length) {
      const searchPattern = new RegExp(this.state.search.map(term => `(?=.*${term})`).join(''), 'i');
      options = expenses.filter(option => option.location.match(searchPattern)
      )} else {
      options = expenses;
    }

    const total = options.map(expense => expense.amount).reduce((a, b) => a + b, 0);
    const travel = options.filter(expense => expense.category.includes('Air Travel')).map(expense => expense.amount).reduce((a, b) => a + b, 0);
    const lodging = options.filter(expense => expense.category.includes('Lodging')).map(expense => expense.amount).reduce((a, b) => a + b, 0);
    const food = options.filter(expense => expense.category.includes('Meals & Entertainment')).map(expense => expense.amount).reduce((a, b) => a + b, 0);
    const phone = options.filter(expense => expense.category.includes('Phone & Internet')).map(expense => expense.amount).reduce((a, b) => a + b, 0);
    const transportation = options.filter(expense => expense.category.includes('Transportation')).map(expense => expense.amount).reduce((a, b) => a + b, 0);

    return (
      <div className="card card-summary mt-5">
        <div className="card-header">
          <div className="row">
            <div className="col-sm-6">
              Expense Summary
            </div>
            <div className="col-sm-6">
              <div className="input-group search-form">
                <input type="text" className="form-control" placeholder="Search Location..."
                  onChange={(e) => this.setState({search: e.target.value.split(' ')})}/>
                <div className="input-group-append">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-1">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-4 card-body  text-center">
                <p className="card-count">{total.length == 0 ? 0 : total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                <img src="https://img.icons8.com/fluent/48/000000/purchase-order.png" />
                <p className="category-txt">All Expenses</p>
              </div>
              <div className="col-sm-4 card-body  text-center">
                <p className="card-count">{travel.length == 0 ? 0 : travel.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                <img src="https://img.icons8.com/emoji/48/000000/airplane-emoji.png" />
                <p className="category-txt">Air Travel</p>
              </div>
              <div className="col-sm-4 card-body  text-center">
                <p className="card-count">{lodging.length == 0 ? 0 : lodging.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                <img src="https://img.icons8.com/emoji/48/000000/hotel-emoji.png" />
                <p className="category-txt">Lodging</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-4 card-body  text-center">
                <p className="card-count">{food.length == 0 ? 0 : food.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                <img src="https://img.icons8.com/emoji/48/000000/fork-and-knife-with-plate-emoji.png" />
                <p className="category-txt">Meals & Entertainment</p>
              </div>
              <div className="col-sm-4 card-body  text-center">
                <p className="card-count">{phone.length == 0 ? 0 : phone.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                <img src="https://img.icons8.com/emoji/48/000000/mobile-phone-with-arrow.png" />
                <p className="category-txt">Phone & Internet</p>
              </div>
              <div className="col-sm-4 card-body  text-center">
                <p className="card-count">{transportation.length == 0 ? 0 : transportation.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
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
