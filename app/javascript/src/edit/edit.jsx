import React from 'react'

import './edit.scss';

const ID = window.location.pathname.replace('/expenses/', '');

class Edit extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null,
      expenses: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCategory = this.handleCategory.bind(this)
    this.handlePayment = this.handlePayment.bind(this)
    this.handleForm = this.handleForm.bind(this)
  }

  componentDidMount() {
    fetch(`/api/expenses/${ID}`)
    .then(response => response.json())
    .then(data => this.setState({ expenses: data.expense }))
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

  handleCategory = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  handlePayment = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  renderForm() {
    const { expenses } = this.state
    const { id, location, date, category, merchant, split, amount, payment_method, note, image_url } = expenses
    
      return(
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <form key={id}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="label">Expense Date</label>
                  <input className="input-form" type="date" value={date} onChange={this.handleForm}/>
                </div>
                <div className="form-group col-md-6">
                  <label className="label">Merchant</label>
                  <input className="input-form" type="text" value={merchant} onChange={this.handleForm} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-5">
                  <label className="label">Location</label>
                  <input className="input-form" type="text" value={location} onChange={this.handleForm}/>
                </div>
                <div className="form-group col-md-5">
                  <label className="label">Amount</label>
                  <input className="input-form" type="number" min={0} step={0.01} value={amount} onChange={this.handleForm} />
                </div>
                <div className="form-group col-md-2">
                  <label className="label">Split</label>
                  <input className="input-form" type="number" min={1} value={split} onChange={this.handleForm}/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label forhtml="categoryID">Category</label>
                  <select className="category-options" id="categoryID" value={category} onChange={this.handleCategory}>
                    <option disabled>Select...</option>
                    <option value="Air Travel">✈  Air Travel</option>
                    <option value="Lodging">🏨  Lodging</option>
                    <option value="Meals & Entertainment">🍽  Meals & Entertainment</option>
                    <option value="Phone & Internet">📲  Phone & Internet</option>
                    <option value="Transportation">🚖  Transportation</option>
                    <option value="Other Expense">🧾  Other Expense</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label forhtml="paymentID">Payment Method</label>
                  <select className="pay-options" id="paymentID"  value={payment_method} onChange={this.handlePayment}>
                    <option disabled>Select...</option>
                    <option value="Cash">💵  Cash</option>
                    <option value="Credit Card">💳  Credit Card</option>
                    <option value="Other Payment Method">💰  Other Payment Method</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label forhtml="noteID">Note</label>
                <textarea className="text" id="noteID" rows="2" value={note} onChange={this.handleForm}></textarea>
              </div>
            </form>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="card mt-3 mb-3">
              <div className="card-body">
                <h3>Receipt</h3>
                  <img className="responsive" src={image_url}/>
              </div>
            </div>
          </div>
        </div>
      )
    } 

  render() {
    return (
    <div className="container">
      <div className="text-center mt-3">
        <h2 className="title mb-2">New Expense</h2>
      </div>
      
          {this.renderForm()}
        
      <div className="text-center">
        <button className="button-form orange mr-5" type="button">Edit</button>
        <button className="button-form green mr-5" type="button">Save</button>
        <button onClick={() => {window.location.href='/dashboard'}} className="button-form red" type="button">Cancel</button>
      </div>
    </div>
    )
  }

}

export default Edit
