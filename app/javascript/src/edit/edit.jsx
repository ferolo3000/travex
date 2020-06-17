import React from 'react'
import { handleErrors } from '@utils/fetchHelper';

import './edit.scss';

const ID = window.location.pathname.replace('/expenses/', '');

class Edit extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      editable: false,
      file: null,
      expenses: {},
      dateEditField: '',
      merchantEditField: '',
      locationEditField: '',
      amountEditField: 0,
      splitEditField: 1,
      categoryEditField: '',
      payment_methodEditField: '',
      noteEditField: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCategory = this.handleCategory.bind(this)
    this.handlePayment = this.handlePayment.bind(this)
    this.handleForm = this.handleForm.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
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

  handleEdit = (event) => {
    event.preventDefault();
    this.setState({ editable: true})
   }

   handleUpdate = (event) => {
    event.preventDefault();
    const expense = { 
      date: this.state.dateEditField,
      merchant: this.state.merchantEditField,
      location: this.state.locationEditField,
      amount: this.state.amountEditField,
      split: this.state.splitEditField,
      category: this.state.categoryEditField,
      payment_method: this.state.payment_methodEditField,
      note: this.state.noteEditField,
    };

    fetch(`/api/expenses/${ID}`, ({
      method: 'PUT',
      body: JSON.stringify(expense),
    }))
    .then(handleErrors)
    .then(data => {
      console.log(data.success)
      if (data.success) {
        alert("Updated successfully!")
      }
    })
    .catch((error) => {
    console.log('Error:', error);
    });
  }

  renderForm() {
    const { expenses } = this.state
    const { id, location, date, category, merchant, split, amount, payment_method, note, image } = expenses
    let merchantEdit =  this.state.editable ? <input name="merchantEditField" className="input-form" type="text" defaultValue={merchant} onChange={this.handleForm} /> : <p className="input-text">{merchant}</p>
    let dateEdit =  this.state.editable ? <input name="dateEditField" className="input-form" type="date" defaultValue={date} onChange={this.handleForm} /> : <p className="input-text">{date}</p> 
    let locationEdit =  this.state.editable ? <input name="locationEditField" className="input-form" type="text" defaultValue={location} onChange={this.handleForm} /> : <p className="input-text">{location}</p> 
    let amountEdit =  this.state.editable ? <input name="amountEditfield" min={0} step={0.01} className="input-form" type="number" defaultValue={amount} onChange={this.handleForm} /> : <p className="input-text">{amount}</p> 
    let splitEdit =  this.state.editable ? <input name="splitEditField" className="input-form" min={1} type="number" defaultValue={split} onChange={this.handleForm} /> : <p className="input-text">{split}</p> 
    let noteEdit =  this.state.editable ?<textarea className="text" onChange={this.handleForm} rows="2" defaultValue={note}></textarea> : <p className="input-text">{note}</p>
    let categoryEdit =  this.state.editable ? 
      <select className="category-options" id="categoryID" defaultValue={category}>
        <option disabled>Select...</option>
        <option value="Air Travel">✈ Air Travel</option>
        <option value="Lodging">🏨 Lodging</option>
        <option value="Meals & Entertainment">🍽 Meals & Entertainment</option>
        <option value="Phone & Internet">📲 Phone & Internet</option>
        <option value="Transportation">🚖 Transportation</option>
        <option value="Other Expense">🧾 Other Expense</option>
      </select> : <p className="input-text">{category}</p> 
    let payment_methodEdit =  this.state.editable ? 
      <select className="pay-options" id="paymentID" defaultValue={payment_method}>
        <option disabled>Select...</option>
        <option value="Cash">💵 Cash</option>
        <option value="Credit Card">💳 Credit Card</option>
        <option value="Other Payment Method">💰 Other Payment Method</option>
      </select> : <p className="input-text">{payment_method}</p>  
   
      return(
        <form key={id}>
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="label">Expense Date</label>
                  {dateEdit}
                </div>
                <div className="form-group col-md-6">
                  <label className="label">Merchant</label>
                  {merchantEdit}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-5">
                  <label className="label">Location</label>
                  {locationEdit}
                </div>
                <div className="form-group col-md-5">
                  <label className="label">Amount</label>
                  {amountEdit}
                </div>
                <div className="form-group col-md-2">
                  <label className="label">Split</label>
                  {splitEdit}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label forhtml="categoryID">Category</label>
                    {categoryEdit}
                </div>
                <div className="form-group col-md-6">
                  <label forhtml="paymentID">Payment Method</label>
                    {payment_methodEdit}
                </div>
              </div>
              <div className="form-group">
                <label forhtml="noteID">Note</label>
                {noteEdit}
              </div>
              <div className="text-center">
               {this.state.editable ? <button className="button-form green mr-5 pl-3 pr-3" type="submit" onClick={this.handleUpdate}>Submit</button> :  <button className="button-form green mr-5 pl-3 pr-3" onClick={this.handleEdit}>Edit</button>}
                <button onClick={()=> {window.location.href='/dashboard'}} className="button-form red" type="button">Cancel</button>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="card mt-3 mb-3">
                <div className="card-body">
                  <h3>Receipt</h3>
                  <img className="responsive" src={image} />
                </div>
              </div>
            </div>
          </div>
        </form>
      )
    } 

  render() {
    console.log(this.state.merchantEditField)
    console.log(this.state.locationEditField)
    return (
    <div className="container">
      <div className="text-center mt-3">
        <h2 className="title mb-2">View Expense</h2>
      </div>
      
          {this.renderForm()}
        
      
    </div>
    )
  }

}

export default Edit