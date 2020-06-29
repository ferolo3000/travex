import React from 'react';
import Layout from './layout'
import Message from "../report/message"
import RenderTable from "./table"
import update from 'immutability-helper'
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

import './admin.scss';

class Admin extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        expenses: [],
        showHide : false,
        currentPage: 1,
        itemPerPage: 5,
        filterUser: '',
        filterStatus: '',
        action:'',
        item: 0,
        isChecked: false,
        itemStatus: ''
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleFilter = this.handleFilter.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleStatus = this.handleStatus.bind(this);
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

  handleStatus = (event) => {
    this.setState({ itemStatus: event.target.value})
  };

  handleOnClickAction = () => {

    const formData = new FormData()
    formData.set('expense[status]', this.state.itemStatus)

    fetch(`/api/${this.state.itemStatus}/${this.state.item}`, ({
      method: 'PUT',
      body: formData,
      contentType: false,
      processData: false,
    }))
    .then(handleErrors)
    .catch((error) => {
    console.log('Error:', error);
    });
    alert("Status has been updated!")
    window.location.reload(false)
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
    this.setState({});
    fetch('/api/authenticated')
      .then(response => response.json())
      .then(data => {this.setState({
        user_id: data.user_id })
        return fetch(`/api/admin`)
        })
        .then(response => response.json())
        .then(data => this.setState({ expenses: data.expenses }))
  }

  render() {
    console.log(this.state.filterUser)
    const { expenses, currentPage, itemPerPage, filterUser, filterStatus } = this.state;
    const users = Object.values(expenses.reduce((acc,cur)=>Object.assign(acc,{[cur.user]:cur}),{}))

//----------------------Start Pagination-----------------------//
    // Logic for displaying current items
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    

    // Logic for Data
    const adminData = expenses.filter(item => item.status != 'active')
    let filterData = adminData;

    if (filterStatus != '') {
      filterData = adminData.filter(item => item.status == filterStatus)
    }

    if (filterUser != '') {
      filterData = adminData.filter(item => item.user == filterUser)
    }

    if (filterStatus != '' && filterUser != '') {
      filterData = adminData.filter(item => item.status == filterStatus && item.user == filterUser)
    }

    if (filterUser != '' && filterStatus != '') {
      filterData = adminData.filter(item => item.user == filterUser && item.status == filterStatus)
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

    return (
      <Layout>
      <div className="container">
        <div className="text-center mt-3">
            <h2 className="title mb-2">Approver Expense List</h2>
        </div>
        <div className="row">
          <div className="form-group col-lg-3 col-md-3">
              <label forhtml="categoryID" className="label">
                  <svg className="bi bi-person mr-1 mb-1" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  </svg> Filter User
              </label>
              <select name='filterUser'  className="category-options"  value={this.state.filterUser} onChange={this.handleFilter}>
                                    <option value=''></option>
                  {users.map(user => <option key={user.user} value={user.user}>{user.user}</option>)}  
              </select>
          </div>
          <div className="form-group col-lg-3 col-md-3">
            <label forhtml="payID"  className="label">
              <svg className="bi bi-columns mr-1 mb-1" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M15 2H1v12h14V2zM1 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1z"/>
                <path fillRule="evenodd" d="M7.5 14V2h1v12h-1zm0-8H1V5h6.5v1zm7.5 5H8.5v-1H15v1z"/>
              </svg> Filter Status
            </label>
            <select name='filterStatus'  className="category-options" id="categoryID" value={this.state.filterStatus} onChange={this.handleFilter}>
                <option value=""></option>
                <option value="submitted">Submitted</option>
                <option value="rejected">Rejected</option>
                <option value="approved">Approved</option>
            </select>
          </div>
          <div className="form-group col-lg-4 col-md-4 vertical-line">
              <label forhtml="payID"  className="label">
                <svg className="bi bi-file-check mr-1 mb-1 ml-1" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8h-1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5V1z"/>
                  <path fillRule="evenodd" d="M15.854 2.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 4.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                </svg> Update Status
              </label>
              <select name='actions'  className="category-options ml-1" id="categoryID" value={this.state.itemStatus} onChange={this.handleStatus}>
                  <option value=""></option>
                  <option value="approved">Approve Expense</option>
                  <option value="rejected">Reject Expense</option>
              </select>    
          </div>
          <div className="col-lg-2 col-md-2">
            <button id="filter-btn" className="btn btn-md" onClick={this.handleOnClickAction}>
              <svg className="bi bi-arrow-clockwise" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3.17 6.706a5 5 0 0 1 7.103-3.16.5.5 0 1 0 .454-.892A6 6 0 1 0 13.455 5.5a.5.5 0 0 0-.91.417 5 5 0 1 1-9.375.789z"/>
                <path fillRule="evenodd" d="M8.147.146a.5.5 0 0 1 .707 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 1 1-.707-.708L10.293 3 8.147.854a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
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
                  <th scope="col">User</th>
                  <th scope="col">Location</th>
                  <th scope="col">Category</th>
                  <th scope="col">Guests</th>
                  <th scope="col">Merchant</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Payment Method</th>
                  <th scope="col">Note</th>
                  <th scope="col">Status</th>
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
              <Message message={"You have no expense to approve"}/>
            </React.Fragment>}
        </div>
      </div>
      </Layout>
    )
  }

}

export default Admin
