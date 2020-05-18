import React from "react";

import './dashboard.scss';

class Report extends React.Component {

  render() {
    return (
      <div>
        <div className="text-center mt-4">
          <h2 className="title mb-4">Reports</h2>
        </div>
	      <div className="row">
          <div className="form-group col-md-4">
            <label className="label">
              <svg className="bi bi-calendar mr-3 mb-1" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" clipRule="evenodd"/>
                <path fillRule="evenodd" d="M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
              </svg> Date
            </label>
          <input className="input-form" type="date"/>
          </div>
          <div className="form-group col-md-4">
            <label forhtml="categoryID">
            <svg className="bi bi-bag mr-3 mb-1" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z" clipRule="evenodd"/>
              <path d="M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z"/>
            </svg> Category
            </label>
            <select className="category-options" id="categoryID">
              <option selected>All</option>
              <option>Telephone & Internet</option>
              <option>Meals & Entertainment</option>
              <option>Transportation</option>
              <option>Hotel</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label forhtml="payID">
              <svg className="bi bi-credit-card mr-3 mb-1" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z" clipRule="evenodd"/>
                <rect width="3" height="3" x="2" y="9" rx="1"/>
                <path d="M1 5h14v2H1z"/>
              </svg> Payment Method
            </label>
            <select className="pay-options" id="payID">
              <option selected>All</option>
              <option>Cash</option>
              <option>Credit Card</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-4">
            <select className="category-options" id="categoryID">
              <option value="" disabled selected>Actions</option>
              <option>Delete</option>
              <option>Edit</option>
              <option>Export to PDF</option>
            </select>
          </div>
        </div>
        <div className="container mt-3">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Date</th>
                <th scope="col">Category</th>
                <th scope="col">Location</th>
                <th scope="col">Amount</th>
                <th scope="col">Payment Method</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label>
                    <input data-index="0" name="btSelectItem" type="checkbox" value="0" />
                  </label>
                </td>
                <td>27-10-2018</td>
                <td>Transportation</td>
                <td>London</td>
                <td>134</td>
                <td>Cash</td>
              </tr>
              <tr>
                <td>
                  <label>
                    <input data-index="0" name="btSelectItem" type="checkbox" value="0" />
                  </label>
                </td>
                <td>20-09-2019</td>
                <td>Hotel</td>
                <td>London</td>
                <td>1.200</td>
                <td>Credit Card</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }

}

export default Report
