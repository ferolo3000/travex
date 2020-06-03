import React, { Component } from 'react';
import Message from "./message"
import Category from "./category"
import Payment from "./payment"
import RenderTable from "./table"

import './report.scss';

class Report extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        expenses: [],
        showHide : false,
        checked: false,
        currentPage: 1,
        itemPerPage: 5,
        filterCategory: '',
        filterPayment: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleFilter = this.handleFilter.bind(this);
      this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      itemPerPage: event.target.value,
    })
  }

  handleFilter = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
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
    console.log(this.state.filterCategory)
    const { expenses, currentPage, itemPerPage, filterCategory, filterPayment } = this.state;

//----------------------Start Pagination-----------------------//
    // Logic for displaying current items
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    

    // Logic for Data
    let filteredData;
    if(filterCategory !== "All") {
      filteredData = expenses.filter(option => option.category.match(filterCategory))
    } else {
      filteredData = expenses
    }
    const currentList = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(expenses.length / itemPerPage); i++) {
      pageNumbers.push(i);
    }

    // Render pagination
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          className='page-item page-link paginate'
          key={number}
          id={number}
          onClick={this.handleClick}>
          {number}
        </li>
      );
    });  
//----------------------End Pagination-----------------------//

//----------------------Start Action Options------------------//
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

//----------------------End Action Options------------------//

    return (
      <div className="container">
        <div className="text-center mt-3">
            <h2 className="title mb-2">Expenses</h2>
        </div>
        <div className="row">
          <Category onChange={this.handleFilter} name={"filterCategory"} value={this.state.filterCategory} />
          <Payment onChange={this.handleFilter} name={"filterCategory"} value={this.state.filterPayment} />
          <div className="col-4">
            <button id="add-btn" className="btn btn-lg" onClick={() => {window.location.href='/form'}}>
                <svg className="bi bi-plus" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" />
                    <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" />
                </svg>
            </button>
          </div>
        </div>  
        <div className="action-buttons">
            {actions}
        </div>
        <div className="card card-summary mt-2">
          <div className="card-header">Expenses</div>
          { expenses.length > 0 ? 
          <div className="table-responsive-lg">
            <table className="table table-hover d-block d-md-table">
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
                <RenderTable data={currentList}/>
              </tbody>
            </table>
            <div className="pagination-footer">
              <div className="row">
                <div className="col-5">
                  <nav>
                    <ul className='pagination ml-3'>
                      {renderPageNumbers}
                    </ul>
                  </nav>
                </div>
                <div className="col-3 text-right">
                  <p className="item-count">Total: {currentList.length + indexOfFirstItem} of {expenses.length} </p>
                </div>
                <div className="col-4 text-center">
                  <select id="items" value={this.state.itemPerPage} onChange={this.handleChange}>
                    <option defaultValue value="5">5 Records Per Page</option>
                    <option value="10">10 Records Per Page</option>
                    <option value="20">20 Records Per Page</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          : <React.Fragment>
                <Message />
            </React.Fragment>}
        </div>
      </div>
    )
  }

}

export default Report
