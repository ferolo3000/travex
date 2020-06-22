import React from 'react'
import Layout from '../dashboard/layout'
import { safeCredentialsForm, handleErrors } from '@utils/fetchHelper';
import cities from '@utils/cities';

import './form.scss';

class Form extends React.Component {
  constructor(props){
    super(props)
    this.myRef = React.createRef()
    this.state = {
      fileImg: null,
      file: null,
      date: '',
      merchant: '',
      location: '',
      amount: 0,
      split: 1,
      category: '',
      payment_method: '',
      note: '',
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleForm = this.handleForm.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
    this.createExpense = this.createExpense.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
  }

  handleChange(event) {
    this.setState({
      fileImg: URL.createObjectURL(event.target.files[0]),
      file: event.target.files[0],
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

  handleLocation = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  clearForm = (event) => {
    this.setState({
      date: '',
      merchant: '',
      location: '',
      amount: 0,
      split: 1,
      category: '',
      payment_method: '',
      note: '',
      file: null,
      fileImg: null
    })
  }

  createExpense = (e) => {
    e.preventDefault();
    //const image = this.myRef.files[0];
    const formData = new FormData()
    {this.state.file !== null ? formData.set('expense[image]', this.state.file) : null}
      //formData.append('expense[image]', this.state.file)
      formData.append('expense[date]', this.dateInput.value)
      formData.append('expense[merchant]', this.merchantInput.value)
      formData.append('expense[location]', this.locationInput.value)
      formData.append('expense[amount]', this.amountInput.value)
      formData.append('expense[split]', this.splitInput.value)
      formData.append('expense[category]', this.categoryInput.value)
      formData.append('expense[payment_method]', this.payment_methodInput.value)
      formData.append('expense[note]', this.noteInput.value)

    fetch('/api/expenses', safeCredentialsForm({
      method: 'POST',
      //body: JSON.stringify(data),
      body: formData,
      contentType: false,
      processData: false,
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
            file: null,
            fileImg: null
          })
          alert("Created successfully!")
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }

  render() {
    const sorted = cities.sort((a,b) => (a.city > b.city) ? 1 : ((b.city > a.city) ? -1 : 0)); 
    return (
      <Layout logOut={this.handleLogout}>
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
                  <input className="input-form" type="date" name="date" value={this.state.date} onChange={this.handleForm} ref={(input) => this.dateInput = input}  required />
                </div>
                <div className="form-group col-md-6">
                  <label className="label">Merchant</label>
                  <input className="input-form" type="text" name="merchant" value={this.state.merchant} onChange={this.handleForm} ref={(input) => this.merchantInput = input} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-5">
                  <label className="label">Location</label>
                  <select className="category-options" id="locationID" name="location" value={this.state.location} onChange={this.handleLocation} ref={(input) => this.locationInput = input}>
                  {sorted.map(city => <option key={city.id} value={city.city}>{city.city}</option>)}
                  </select>
                </div>
                <div className="form-group col-md-5">
                  <label className="label">Amount</label>
                  <input className="input-form" type="number" min={0} step={0.01} name="amount" value={this.state.amount} onChange={this.handleForm} ref={(input) => this.amountInput = input}  required />
                </div>
                <div className="form-group col-md-2">
                  <label className="label">Split</label>
                  <input className="input-form" type="number" min={1} name="split" value={this.state.split} onChange={this.handleForm} ref={(input) => this.splitInput = input}  required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label forhtml="categoryID">Category</label>
                  <select className="category-options" id="categoryID" name="category" value={this.state.category} onChange={this.handleFilter} ref={(input) => this.categoryInput = input}  required>
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
                  <select className="pay-options" id="paymentID" name="payment_method" value={this.state.payment_method} onChange={this.handleFilter} ref={(input) => this.payment_methodInput = input}  required>
                    <option>Select...</option>
                    <option value="Cash">💵 Cash</option>
                    <option value="Credit Card">💳 Credit Card</option>
                    <option value="Other Payment Method">💰 Other Payment Method</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label forhtml="noteID">Note</label>
                <textarea className="text" id="noteID" rows="2" name="note" value={this.state.note} onChange={this.handleForm} ref={(input) => this.noteInput = input} ></textarea>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="card mt-3 mb-3">
                <div className="card-body">
                  <h3>Receipt</h3>
                  <div className="form-group">
                    <img className="img-thumbnail" id="img-select" src={this.state.fileImg} />
                    <input type="file" accept="image/*" name="image" onChange={this.handleChange} className="form-control-file" id="image-form" ref={this.myRef} />
                  </div>
                </div>
              </div>
            </div>  
            <div className="group-btn">
              <button className="button-form green mr-5" type="submit">Create</button>
              <button onClick={this.clearForm} className="button-form red" type="button">Cancel</button>
            </div>
          </div>
        </form>
      </div>
      </Layout>  
    )
  }
}

export default Form