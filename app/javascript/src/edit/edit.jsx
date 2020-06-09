import React from 'react'

import './edit.scss';

class Edit extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null,
      data: {}
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch(`/expenses/${this.props.expense_id}`)
    .then(response => response.json())
    .then(data => this.setState({ data: data.expense }))
  }

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }


  render() {
    console.log(this.state.data)
    return (
    <div className="container">
      <div className="text-center mt-3">
        <h2 className="title mb-2">New Expense</h2>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-12">
        {this.state.data.map(expense => {
          const { id, location, date, category, merchant, amount, payment_method, note, image_url } = expense
          return(
            <form key={id}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label className="label">Expense Date</label>
                <input className="input-form" type="date" value={date}/>
              </div>
              <div className="form-group col-md-6">
                <label className="label">Merchant</label>
                <input className="input-form" type="text" value={merchant} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-5">
                <label className="label">Location</label>
                <input className="input-form" type="text" value={location} />
              </div>
              <div className="form-group col-md-5">
                <label className="label">Amount</label>
                <input className="input-form" type="number" min={0} step={0.01} value={amount} />
              </div>
              <div className="form-group col-md-2">
                <label className="label">Split</label>
                <input className="input-form" type="number" min={1} value={split}/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label forhtml="categoryID">Category</label>
                <select className="category-options" id="categoryID" value={category}>
                  <option disabled>Select...</option>
                  <option>✈  Air Travel</option>
                  <option>🏨  Lodging</option>
                  <option>🍽  Meals & Entertainment</option>
                  <option>📲  Phone & Internet</option>
                  <option>🚖  Transportation</option>
                  <option>🧾  Other Expense</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label forhtml="paymentID">Payment Method</label>
                <select className="pay-options" id="paymentID"  value={payment_method}>
                  <option disabled>Select...</option>
                  <option>💵  Cash</option>
                  <option>💳  Credit Card</option>
                  <option>💰  Other Payment Method</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label forhtml="noteID">Note</label>
              <textarea className="text" id="noteID" rows="2" value={note}></textarea>
            </div>
          </form>
          )
        }) 
        }
        </div>
        <div className="col-lg-4  col-md-12">
          <div className="card mt-3 mb-3">
            <div className="card-body">
              <h3>Receipt</h3>
              <form>
                <div className="form-group">
                  <img className="img-thumbnail" src={this.state.file}/>
                  <input type="file" onChange={this.handleChange}  className="form-control-file" id="image-form"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="button-form green mr-5" type="button">Save</button>
        <button onClick={() => {window.location.href='/dashboard'}} className="button-form red" type="button">Cancel</button>
      </div>
    </div>
    )
  }

}

export default Edit
