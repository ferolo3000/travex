import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

import './dashboard.scss';

class Form extends React.Component {



  render() {
    return (
    <div className="container">
      <div className="text-center mt-4">
        <h2 className="title mb-4">New Expense</h2>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="text-center mt-4">

          </div>
        </div>
        <div className="col-md-8">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label className="mb-3">Start Date</label>
                <input type="date" placeholder="Start Date"  required/>
              </div>
              <div className="form-group col-md-6">
                <label className="mb-3">End Date</label>
                <input type="date" placeholder="End Date"  required/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label className="mb-3">Location</label>
                <input type="text" placeholder="New York"  required/>
              </div>
              <div className="form-group col-md-6">
                <label className="mb-3">Amount</label>
                <input type="number" placeholder="$10" min={0}  required/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label forHtml="categoryID">Category </label>
                <select className="category-options" id="categoryID">
                  <option>Select...</option>
                  <option>Telephone & Internet</option>
                  <option>Meals & Entertainment</option>
                  <option>Transportation</option>
                  <option>Parking</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label forHtml="paymentID">Payment Method</label>
                <select className="pay-options" id="paymentID">
                  <option>Select...</option>
                  <option>Cash</option>
                  <option>Credit Card</option>
                  <option>Debit Card</option>
                  <option>Pay Pal</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label forHtml="noteID">Note</label>
              <textarea className="text" id="noteID" rows="2"></textarea>
            </div>
            <button className="red" type="button">Create</button>
          </form>
        </div>
      </div>
    </div>
    )
  }

}

export default Form
