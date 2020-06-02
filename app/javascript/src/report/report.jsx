import React from "react";
import Pagination from "./pagination";
import Table from "./table";


import './report.scss';

class Report extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        expenses: [],
        showHide : false,
        checked: false,
        currentPage: 1,
        setCurrentPage: 1,
        postsPerPage: 3
      }
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      checked: !this.state.checked
    })
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide })
  }

  componentDidMount() {
    fetch('/api/expenses')
    .then(response => response.json())
    .then(data => this.setState({ expenses: data.expenses }))
  }


  render() {
    const data = this.state.expenses
    const { currentPage, postsPerPage, setCurrentPage, expenses } = this.state
    // Get current data
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const actions = this.state.checked
      ? <div className="row">
          <div className="form-group col-lg-3 col-md-6">
            <select className="category-options" id="categoryID">
              <option value="" disabled selected>Actions</option>
              <option>&#9940;  Delete</option>
              <option>&#9989;  Edit</option>
              <option>&#128209;  Export to PDF</option>
              <option>&#128199;  View</option>
            </select>
          </div>
          <div className="col-md-2">
            <button id="action-btn" className="btn btn-lg">
              <svg className="bi bi-check-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd"/>
                <path fillRule="evenodd" d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>
      : null;

    return (
      <div className="container">
        <div className="text-center mt-3">
            <h2 className="title mb-2">Expenses</h2>
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-12">
                <div className="row">
                    <div className="form-group col-md-6">
                        <label className="label">
                            <svg className="bi bi-calendar mr-1 mb-1" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg> Date
                        </label>
                        <input className="input-form" type="date" />
                    </div>
                    <div className="form-group col-md-6">
                        <label forhtml="categoryID">
                            <svg className="bi bi-bag mr-1 mb-1" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z" clipRule="evenodd" />
                                <path d="M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z" />
                            </svg> Category
                        </label>
                        <select className="category-options" id="categoryID">
                            <option defaultValue>All</option>
                            <option>✈  Air Travel</option>
                            <option>🏨  Lodging</option>
                            <option>🍽  Meals & Entertainment</option>
                            <option>📲  Phone & Internet</option>
                            <option>🚖  Transportation</option>
                            <option>🧾  Other Expense</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="row">
                    <div className="form-group col-md-6">
                        <label forhtml="payID">
                            <svg className="bi bi-credit-card mr-1 mb-1" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z" clipRule="evenodd" />
                                <rect width="3" height="3" x="2" y="9" rx="1" />
                                <path d="M1 5h14v2H1z" />
                            </svg> Payment
                        </label>
                        <select className="pay-options" id="payID">
                            <option defaultValue>All</option>
                            <option>💵  Cash</option>
                            <option>💳  Credit Card</option>
                            <option>💰  Other Payment Method</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <button id="filter-btn" className="btn btn-lg">
                            <svg className="bi bi-funnel" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <button id="add-btn" className="btn btn-lg" onClick={() => {window.location.href='/form'}}>
                            <svg className="bi bi-plus" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" />
                                <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="action-buttons">
            {actions}
        </div>
        <div className="card card-summary mt-2">
          <div className="card-header">Expenses</div>
          <div className="table-responsive-lg">
            { this.state.expenses.length > 0 ? 
            <table className="table table-hover w-100 d-block d-md-table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Date</th>
                  <th scope="col">Location</th>
                  <th scope="col">Category</th>
                  <th scope="col">Merchant</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Payment Method</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <Table data={currentPosts} />
              </tbody>
            </table>
            : <React.Fragment>
                <div className="text-center mt-5 mb-5">
                  <img src="https://img.icons8.com/cotton/64/000000/delete-receipt.png"/>
                  <h3 className="text-center mt-2">You don't have any expenses</h3>
                </div>
              </React.Fragment>}
          </div>
          <Pagination
                postsPerPage={postsPerPage}
                totalPosts={expenses.length}
                paginate={paginate}
          />
        </div>
      </div>
    )
  }

}

export default Report
