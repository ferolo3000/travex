import React from "react";

class EditableForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.handleForm = this.handleForm.bind(this)
    this.handleCategory = this.handleCategory.bind(this)
    this.handlePayment = this.handlePayment.bind(this)
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

  handleEdit(){
   if(this.state.editable){

      let date = this.date.value
      let merchant = this.merchant.value
      let location = this.location.value
      let amount = this.amount.value
      let split = this.split.value
      let category = this.category.value
      let payment_method = this.payment_method.value
      let note = this.note.value
      let id = this.props.expense.id
      let expense = {id: id, date: date, merchant: merchant, location: location, amount: amount, split: split, category: category,
        payment_method: payment_method, note: note}
      this.props.handleUpdate(expense)
    }
    this.setState({
      editable: !this.state.editable
    })
  }

  render(){
    let date = this.state.editable ? <input type='text' ref={input => this.date = input} defaultValue={this.props.expenses.date}/> : <input defaultValue={this.props.expenses.date} />
    let merchant = this.state.editable ? <input type='text' ref={input => this.merchant = input} defaultValue={this.props.expenses.merchant}/> : <input defaultValue={this.props.expenses.merchant} />
    let location = this.state.editable ? <input type='text' ref={input => this.location = input} defaultValue={this.props.expenses.location}/> : <input defaultValue={this.props.expenses.location} />
    let amount = this.state.editable ? <input type='text' ref={input => this.amount = input} defaultValue={this.props.expenses.amount}/> : <input defaultValue={this.props.expenses.amount} />
    let split = this.state.editable ? <input type='text' ref={input => this.split = input} defaultValue={this.props.expenses.split}/> : <input defaultValue={this.props.expenses.split} />
    let category = this.state.editable ? <input type='text' ref={input => this.category = input} defaultValue={this.props.expenses.category}/> : <input defaultValue={this.props.expenses.category} />
    let payment_method = this.state.editable ? <input type='text' ref={input => this.payment_method = input} defaultValue={this.props.expenses.payment_method}/> : <input defaultValue={this.props.expenses.payment_method} />
    let note = this.state.editable ? <input type='text' ref={input => this.note = input} defaultValue={this.props.expenses.note}/> : <input defaultValue={this.props.expenses.note} />

    return(
      <React.Fragment>
            <div className="col-lg-8 col-md-12">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="label">Expense Date</label>
                  <input className="input-form" type="date" value={date} onChange={this.handleForm} />
                </div>
                <div className="form-group col-md-6">
                  <label className="label">Merchant</label>
                  <input className="input-form" type="text" value={merchant} onChange={this.handleForm} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-5">
                  <label className="label">Location</label>
                  <input className="input-form" type="text" value={location} onChange={this.handleForm} />
                </div>
                <div className="form-group col-md-5">
                  <label className="label">Amount</label>
                  <input className="input-form" type="number" min={0} step={0.01} value={amount} onChange={this.handleForm} />
                </div>
                <div className="form-group col-md-2">
                  <label className="label">Split</label>
                  <input className="input-form" type="number" min={1} value={split} onChange={this.handleForm} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label forhtml="categoryID">Category</label>
                  <select className="category-options" id="categoryID" value={category} onChange={this.handleCategory}>
                    <option disabled>Select...</option>
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
                  <select className="pay-options" id="paymentID" value={payment_method} onChange={this.handlePayment}>
                    <option disabled>Select...</option>
                    <option value="Cash">💵 Cash</option>
                    <option value="Credit Card">💳 Credit Card</option>
                    <option value="Other Payment Method">💰 Other Payment Method</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label forhtml="noteID">Note</label>
                <textarea className="text" id="noteID" rows="2" value={note} onChange={this.handleForm}></textarea>
              </div>
              <button className="btn btn-sm btn-success" onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
            </div>
      </React.Fragment>
    )
  }
}

export default EditableForm
    ;
