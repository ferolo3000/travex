import React from 'react';
import cities from '@utils/cities';
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import StatsTable from './statsTable'

import './dashboard.scss';

class Stats extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        expenses: [],
        search: [],
        user_id:'',
        location:'',
        open: false,
        tableFilter: ''
      }
      this.openTable = this.openTable.bind(this);
  }

  componentDidMount() {
    fetch('/api/authenticated')
      .then(response => response.json())
      .then(data => {this.setState({
        user_id: data.user_id })
        return fetch(`/api/${this.state.user_id}/expenses`)
        })
        .then(response => response.json())
        .then(data => this.setState({ expenses: data.expenses }))
  }

  handleLocation = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  openTable = (e) => {
    this.setState({
      tableFilter: e.target.value,
      open: !this.state.open
    })
  } 

  render() {
    const { expenses, location, open, tableFilter } = this.state
    let options;
    if (location.length) {
      //const searchPattern = new RegExp(search.map(term => `(?=.*${term})`).join(''), 'i');
      const searchPattern = location
      options = expenses.filter(option => option.location.match(searchPattern)
      )} else {
      options = expenses;
    }
    const sorted = cities.sort((a,b) => (a.city > b.city) ? 1 : ((b.city > a.city) ? -1 : 0)); 
    
    const total = options.map(expense => expense.amount).reduce((a, b) => a + b, 0);
    const travel = options.filter(expense => expense.category.includes('Air Travel')).map(expense => expense.amount).reduce((a, b) => a + b, 0);
    const lodging = options.filter(expense => expense.category.includes('Lodging')).map(expense => expense.amount).reduce((a, b) => a + b, 0);
    const food = options.filter(expense => expense.category.includes('Meals & Entertainment')).map(expense => expense.amount).reduce((a, b) => a + b, 0);
    const phone = options.filter(expense => expense.category.includes('Phone & Internet')).map(expense => expense.amount).reduce((a, b) => a + b, 0);
    const transportation = options.filter(expense => expense.category.includes('Transportation')).map(expense => expense.amount).reduce((a, b) => a + b, 0);
    const other = options.filter(expense => expense.category.includes('Other Expense')).map(expense => expense.amount).reduce((a, b) => a + b, 0);
    const statsData = options.filter(expense => expense.category.includes(tableFilter))

    return (
      <div className="card card-summary mt-5">
        <div className="card-header">
          <div className="row">
            <div className="col-sm-6 mt-2">
              Expense Summary: <span className="text-count">{total.length == 0 ? 0 : total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
            </div>
            <div className="col-sm-2 text-right mt-2">
              <label>Select a city</label>
            </div>
            <div className="col-sm-4">
              <select className="category-options" id="locationID" name="location" value={this.state.location} onChange={this.handleLocation}>
                {sorted.map(city => <option key={city.id} value={city.city}>{city.city}</option>)}
              </select>
            </div>
          </div>
        </div>
        <div className="row p-1">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-4 card-body text-center">
                <p className="card-count">{travel.length == 0 ? 0 : travel.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                <img src="https://img.icons8.com/emoji/48/000000/airplane-emoji.png" /><br />
                  <Button
                    value="Air Travel"
                    variant="link"
                    onClick={this.openTable}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}>Air Travel</Button>
              </div>
              <div className="col-sm-4 card-body text-center">
                <p className="card-count">{lodging.length == 0 ? 0 : lodging.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                <img src="https://img.icons8.com/emoji/48/000000/hotel-emoji.png" /><br />
                  <Button
                    value='Lodging'
                    variant="link"
                    onClick={this.openTable}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}>Lodging</Button>
              </div>
              <div className="col-sm-4 card-body text-center">
                <p className="card-count">{food.length == 0 ? 0 : food.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                <img src="https://img.icons8.com/emoji/48/000000/fork-and-knife-with-plate-emoji.png" /><br />
                <Button
                    value='Meals & Entertainment'
                    variant="link"
                    onClick={this.openTable}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}>Meals & Entertainment</Button>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-4 card-body text-center">
                <p className="card-count">{phone.length == 0 ? 0 : phone.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                <img src="https://img.icons8.com/emoji/48/000000/mobile-phone-with-arrow.png" /><br />
                <Button
                    value='Phone & Internet'
                    variant="link"
                    onClick={this.openTable}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}>Phone & Internet</Button>
              </div>
              <div className="col-sm-4 card-body text-center">
                <p className="card-count">{transportation.length == 0 ? 0 : transportation.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                <img src="https://img.icons8.com/emoji/48/000000/oncoming-taxi.png" /><br />
                <Button
                    value='Transportation'
                    variant="link"
                    onClick={this.openTable}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}>Transportation</Button>
              </div>
              <div className="col-sm-4 card-body text-center">
                <p className="card-count">{other.length == 0 ? 0 : other.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                <img src="https://img.icons8.com/fluent/48/000000/purchase-order.png" /><br />
                <Button
                    value='Other Expense'
                    variant="link"
                    onClick={this.openTable}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}>Other Expense</Button>
              </div>
            </div>
          </div>
        </div>
        <Collapse in={this.state.open}>
					<div id="example-collapse-text" className="p-2">
            <table className="rtable rtable--flip table table-hover">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Location</th>
                  <th scope="col">Category</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Payment</th>
                </tr>
              </thead>
              <tbody>
              <StatsTable data={statsData} />
              </tbody>
            </table>
          </div>
				</Collapse>
      </div>
    )
  }

}

export default Stats
