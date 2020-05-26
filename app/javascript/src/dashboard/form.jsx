import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

import './dashboard.scss';

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }


  render() {
    return (
    <div className="container">
      <div className="text-center mt-3">
        <h2 className="title mb-2">New Expense</h2>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label className="label">Expense Date</label>
                <input className="input-form" type="date" required/>
              </div>
              <div className="form-group col-md-6">
                <label className="label">Merchant</label>
                <input className="input-form" type="text" required/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-5">
                <label className="label">Location</label>
                <input className="input-form" type="text" required/>
              </div>
              <div className="form-group col-md-5">
                <label className="label">Amount</label>
                <input className="input-form" type="number" min={0} step={0.01} required/>
              </div>
              <div className="form-group col-md-2">
                <label className="label">Split</label>
                <input className="input-form" type="number" min={1}/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label forhtml="categoryID">Category</label>
                <select className="category-options" id="categoryID">
                  <option disabled selected>Select...</option>
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
                <select className="pay-options" id="paymentID">
                  <option disabled selected>Select...</option>
                  <option>💵  Cash</option>
                  <option>💳  Credit Card</option>
                  <option>💰  Other Payment Method</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label forhtml="noteID">Note</label>
              <textarea className="text" id="noteID" rows="2"></textarea>
            </div>
          </form>
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
        <button className="button-form orange mr-5" type="button">Create</button>
        <button className="button-form red" type="button">Cancel</button>
      </div>
    </div>
    )
  }

}

export default Form
