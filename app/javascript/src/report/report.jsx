import React from 'react';
import Message from "./message"
import Category from "./category"
import Payment from "./payment"
import RenderTable from "./table"
import update from 'immutability-helper'
import { safeCredentials } from '@utils/fetchHelper';

import './report.scss';

class Report extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        expenses: [],
        showHide : false,
        currentPage: 1,
        itemPerPage: 5,
        filterCategory: 'All',
        filterPayment: 'All',
        action:'',
        item: 0,
        isChecked: false,
        user_id:''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleFilter = this.handleFilter.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleAction = this.handleAction.bind(this);
      this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleCheckbox(e) {
    this.setState({
      item: e.target.name,
      isChecked: e.target.checked
    });
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

  handleAction = (event) => {
    this.setState({ action: event.target.value})
  };

  handleOnClickAction = () => {
    window.location = `/expenses/${this.state.item}`;
  }

  handleDeleteItem = () => {
    fetch(`/api/expenses/${this.state.item}`, safeCredentials({
      method: 'DELETE',
    }))
      .then(response => {
        const itemIndex = this.state.expenses.findIndex(x => x.id === this.state.item)
        const updateExpenses = update(this.state.expenses, {
          $splice: [[itemIndex, 1]]
        })
        this.setState({
          expenses: updateExpenses
        })
        alert("deleted successfully!")
      })
      .catch(error => console.log(error))
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide })
  }

  componentDidMount() {
    fetch('/api/authenticated')
      .then(response => response.json())
      .then(data => {this.setState({
        user_id: data.user_id })
        return fetch(`/api/${this.state.user_id}/expenses`)
        })
        .then(response => response.json())
        .then(data => this.setState({ expenses: data.expenses }))
  }

  /*componentDidMount() {
    fetch('/api/expenses')
    .then(response => response.json())
    .then(data => this.setState({ expenses: data.expenses }))
  }*/

  render() {

    const { expenses, currentPage, itemPerPage, filterCategory, filterPayment } = this.state;

//----------------------Start Pagination-----------------------//
    // Logic for displaying current items
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    

    // Logic for Data
    let filterData;

    if(filterCategory == "All" && filterPayment == "All") {
      filterData = expenses
    }

    if(filterCategory !== "All" && filterPayment == "All") {
      filterData = expenses.filter(item => item.category == filterCategory)
    }

    if(filterCategory == "All" && filterPayment !== "All") {
      filterData = expenses.filter(item => item.payment_method == filterPayment)
    }

    if(filterCategory !== "All" && filterPayment !== "All") {
      filterData = expenses.filter(item => item.category == filterCategory && item.payment_method == filterPayment)
    }


    const currentList = filterData.slice(indexOfFirstItem, indexOfLastItem);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filterData.length / itemPerPage); i++) {
      pageNumbers.push(i);
    }

    // Render pagination
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number}>
          <a className='target paginate'
            href=""
            id={number}
            onClick={this.handleClick}>
            {number}
          </a>
        </li>
      );
    });  
//----------------------End Pagination-----------------------//

//----------------------Start Action Options------------------//
    const actions = this.state.isChecked
      ? <div className="row">
            <label forhtml="mt-2 payID">
              <svg className="bi bi-file-check mr-2 ml-3 mb-1" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8h-1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5V1z"/>
                <path fillRule="evenodd" d="M15.854 2.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 4.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
              </svg> Actions
            </label>
          <div className="form-group col-lg-8 col-md-8">
            <select className="category-options" id="categoryID" value={this.state.action} onChange={this.handleAction}>
              <option value="" disabled>Actions</option>
              <option value="edit">✏  Edit/View</option>
              <option value="delete">🗑  Delete</option>
            </select>
          </div>
          <div className="col-md-2">
            <button id="action-btn" className="btn btn-lg" onClick={this.state.action === "delete" ? this.handleDeleteItem : this.handleOnClickAction}>
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
          <Payment onChange={this.handleFilter} name={"filterPayment"} value={this.state.filterPayment} />
          <div className="col-2">
            <button id="add-btn" className="btn btn-lg" onClick={() => {window.location.href='/form'}}>
                <svg className="bi bi-plus" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" />
                    <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" />
                </svg>
            </button>
          </div>
          <div className="col-md-4 col-sm-6 action-buttons">
            {actions}
        </div>
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
                <RenderTable 
                  data={currentList} 
                  checked={this.state.item}
                  onChange={this.handleCheckbox}  
                  />
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
                  <p className="item-count">Total: {currentList.length + indexOfFirstItem} of {filterData.length} </p>
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
                <Message message={"You don't have any expenses"}/>
            </React.Fragment>}
        </div>
      </div>
    )
  }

}

export default Report
