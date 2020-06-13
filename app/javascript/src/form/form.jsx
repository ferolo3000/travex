import React from 'react'
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

import './form.scss';

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null,
      date: '',
      merchant: '',
      location: '',
      amount: 0,
      split: 1,
      category: '',
      payment_method: '',
      note: '',
      image_url:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleForm = this.handleForm.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
    this.createExpense = this.createExpense.bind(this);
  }

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }

  handleForm = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  handleFilter = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  /*createExpense = (event) => {
    event.preventDefault();
    const data = { 
      date: this.state.date,
      merchant: this.state.merchant,
      location: this.state.location,
      amount: this.state.amount,
      split: this.state.split,
      category: this.state.category,
      payment_method: this.state.payment_method,
      note: this.state.note,
    };

    fetch('/api/expenses', safeCredentials({
      method: 'POST',
      body: JSON.stringify(data),
    }))
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }*/

  createExpense = (e) => {
    e.preventDefault();
    const data = { 
      date: this.state.date,
      merchant: this.state.merchant,
      location: this.state.location,
      amount: this.state.amount,
      split: this.state.split,
      category: this.state.category,
      payment_method: this.state.payment_method,
      note: this.state.note,
      image_url:this.state.image_url
    };

    fetch('/api/expenses', safeCredentials({
      method: 'POST',
      body: JSON.stringify(data),
    }))
      .then(handleErrors)
      .then(data => {
        console.log(data.success)
        if (data.success) {
          this.setState({
            date: '',
            merchant: '',
            location: '',
            amount: 0,
            split: 1,
            category: '',
            payment_method: '',
            note: '',
            image_url:''
          })
          alert("Created successfully!")
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="text-center mt-3">
          <h2 className="title mb-2">New Expense</h2>
        </div>
        <form onSubmit={this.createExpense}>
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="label">Expense Date</label>
                  <input className="input-form" type="date" name="date" value={this.state.date} onChange={this.handleForm} required />
                </div>
                <div className="form-group col-md-6">
                  <label className="label">Merchant</label>
                  <input className="input-form" type="text" name="merchant" value={this.state.merchant} onChange={this.handleForm} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-5">
                  <label className="label">Location</label>
                  <input className="input-form" type="text" name="location" value={this.state.location} onChange={this.handleForm} required />
                </div>
                <div className="form-group col-md-5">
                  <label className="label">Amount</label>
                  <input className="input-form" type="number" min={0} step={0.01} name="amount" value={this.state.amount} onChange={this.handleForm} required />
                </div>
                <div className="form-group col-md-2">
                  <label className="label">Split</label>
                  <input className="input-form" type="number" min={1} name="split" value={this.state.split} onChange={this.handleForm} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label forhtml="categoryID">Category</label>
                  <select className="category-options" id="categoryID" name="category" value={this.state.category} onChange={this.handleFilter} required>
                    <option>Select...</option>
                    <option value="Air Travel">✈ Air Travel</option>
                    <option value="Lodging">🏨 Lodging</option>
                    <option value="Meals & Entertainment">🍽 Meals & Entertainment</option>
                    <option value="Phone & Internet">📲 Phone & Internet</option>
                    <option value="Transportation">🚖 Transportation</option>
                    <option value="Other Expense">🧾 Other Expense</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label forhtml="paymentID">Payment Method</label>
                  <select className="pay-options" id="paymentID" name="payment_method" value={this.state.payment_method} onChange={this.handleFilter} required>
                    <option>Select...</option>
                    <option value="Cash">💵 Cash</option>
                    <option value="Credit Card">💳 Credit Card</option>
                    <option value="Other Payment Method">💰 Other Payment Method</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label forhtml="noteID">Note</label>
                <textarea className="text" id="noteID" rows="2" name="note" value={this.state.note} onChange={this.handleForm}></textarea>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="card mt-3 mb-3">
                <div className="card-body">
                  <h3>Receipt</h3>
                  <div className="form-group">
                    <img className="img-thumbnail" src={this.state.file} />
                    <input type="file" onChange={this.handleChange} className="form-control-file" id="image-form" />
                  </div>
                </div>
              </div>
            </div>  
            <div className="group-btn">
              <button className="button-form green mr-5" type="submit">Create</button>
              <button onClick={()=> {window.location.href='/dashboard'}} className="button-form red" type="button">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Form
