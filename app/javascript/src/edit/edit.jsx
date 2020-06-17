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
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCategory = this.handleCategory.bind(this)
    this.handlePayment = this.handlePayment.bind(this)
    this.handleForm = this.handleForm.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  componentDidMount() {
    fetch(`/api/expenses/${ID}`)
    .then(response => response.json())
    .then(data => this.setState({ expenses: data.expense }))
  }

  handleChange(event) {
    this.setState({
      file: event.target.files[0],
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

  handleCancel = (event) => {
    event.preventDefault();
    this.setState({ editable: false})
   } 

  handleEdit = (event) => {
    event.preventDefault();
    this.setState({ editable: true})
   } 

   handleUpdate = (event) => {
    event.preventDefault();
    const formData = new FormData()
      {this.state.file !== null ? formData.set('expense[image]', this.state.file) : null}
      formData.set('expense[date]', this.dateInput.value)
      formData.set('expense[merchant]', this.merchantInput.value)
      formData.set('expense[location]', this.locationInput.value)
      formData.set('expense[amount]', this.amountInput.value)
      formData.set('expense[split]', this.splitInput.value)
      formData.set('expense[category]', this.categoryInput.value)
      formData.set('expense[payment_method]', this.payment_methodInput.value)
      formData.set('expense[note]', this.noteInput.value)
      formData.set('expense[id]', ID)

    fetch(`/api/expenses/${ID}`, ({
      method: 'PUT',
      body: formData,
      contentType: false,
      processData: false,
    }))
    .then(handleErrors)
    .catch((error) => {
    console.log('Error:', error);
    });
    alert("Updated successfully!")
    window.location.reload(false)
  }

  renderForm() {
    const { expenses } = this.state
    const { id, location, date, category, merchant, split, amount, payment_method, note, image } = expenses
    let merchantEdit =  this.state.editable ? <input ref={(input) => this.merchantInput = input} name="merchant" className="input-form" type="text" defaultValue={merchant} onChange={this.handleForm} /> : <p className="input-text">{merchant}</p>
    let dateEdit =  this.state.editable ? <input ref={(input) => this.dateInput = input} name="date" className="input-form" type="date" defaultValue={date} onChange={this.handleForm} /> : <p className="input-text">{date}</p> 
    let locationEdit =  this.state.editable ? <input ref={(input) => this.locationInput = input} name="location" className="input-form" type="text" defaultValue={location} onChange={this.handleForm} /> : <p className="input-text">{location}</p> 
    let amountEdit =  this.state.editable ? <input ref={(input) => this.amountInput = input} name="amount" min={0} step={0.01} className="input-form" type="number" defaultValue={amount} onChange={this.handleForm} /> : <p className="input-text">{amount}</p> 
    let splitEdit =  this.state.editable ? <input ref={(input) => this.splitInput = input} name="split" className="input-form" min={1} type="number" defaultValue={split} onChange={this.handleForm} /> : <p className="input-text">{split}</p> 
    let noteEdit =  this.state.editable ?<textarea ref={(input) => this.noteInput = input} className="text" onChange={this.handleForm} rows="2" defaultValue={note}></textarea> : <p className="input-text">{note}</p>
    let categoryEdit =  this.state.editable ? 
      <select ref={(input) => this.categoryInput = input} className="category-options" id="categoryID" defaultValue={category}>
        <option disabled>Select...</option>
        <option value="Air Travel">✈ Air Travel</option>
        <option value="Lodging">🏨 Lodging</option>
        <option value="Meals & Entertainment">🍽 Meals & Entertainment</option>
        <option value="Phone & Internet">📲 Phone & Internet</option>
        <option value="Transportation">🚖 Transportation</option>
        <option value="Other Expense">🧾 Other Expense</option>
      </select> : <p className="input-text">{category}</p> 
    let payment_methodEdit =  this.state.editable ? 
      <select ref={(input) => this.payment_methodInput = input} className="pay-options" id="paymentID" defaultValue={payment_method}>
        <option disabled>Select...</option>
        <option value="Cash">💵 Cash</option>
        <option value="Credit Card">💳 Credit Card</option>
        <option value="Other Payment Method">💰 Other Payment Method</option>
      </select> : <p className="input-text">{payment_method}</p>  
    let imgEdit = this.state.editable ? <input type="file" accept="image/*" name="image" onChange={this.handleChange} className="form-control-file" id="image-form" /> : null
   
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
                <button onClick={this.handleCancel} className="button-form red" type="button">Cancel</button>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="card mt-3 mb-3">
                <div className="card-body">
                  <h3>Receipt</h3>
                    <img className="responsive" src={image} />
                    {imgEdit}
                </div>
              </div>
            </div>
          </div>
        </form>
      )
    } 

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a id="logo" className="nav-link logo-item" href="/dashboard">travex</a>
        </nav>
        <div className="container">
          <div className="text-center mt-3">
            <h2 className="title mb-2">View Expense</h2>
          </div>
              {this.renderForm()}
        </div>
      </React.Fragment>
    )
  }
}

export default Edit