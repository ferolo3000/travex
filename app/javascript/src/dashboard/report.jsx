import React from "react";

import './dashboard.scss';

class Report extends React.Component {

  render() {
    return (
      <div>
        <div className="text-center mt-4">
          <h2 className="title mb-4">Reports</h2>
        </div>
        <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
        <div className="container mt-3">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Category</th>
                <th scope="col">Location</th>
                <th scope="col">Amount</th>
                <th scope="col">Payment Method</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>27-10-2018</td>
                <td>Transportation</td>
                <td>London</td>
                <td>134</td>
                <td>Cash</td>
              </tr>
              <tr>
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
