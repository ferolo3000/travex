import React from "react";
import Category from "../report/category"
import Message from "../report/message"

import './receipts.scss'

class Receipts extends React.Component {
  constructor(props) {
      super(props)
        this.state = {
          expenses: [],
          filterCategory: 'All',
          user_id:''
        }
      this.handleFilter = this.handleFilter.bind(this);  
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

    handleFilter = (event) => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })
    };

  renderReceitps() {
    // Logic for Data
    const { expenses, filterCategory } = this.state;
    let filterData;

    if(filterCategory == "All") {
      filterData = expenses.filter(item => item.image_url.length > 0)
    }

    if(filterCategory !== "All") {
      filterData = expenses.filter(item => item.category == filterCategory && item.image_url.length > 0)
    }

    if(filterData.length < 1 ) {
      return (
        <div className="container">
          <Message message={"You don't have any receipt"}/>
        </div>
      )
    } else {
      return(  filterData.map((expense) => {
        const { id, location, date, category, amount, image_url } = expense 

          return (
              <div className="col-md-4 card" key={id}> 
                <p className="main-text mt-2">{category}</p>
                <a href={`/expenses/${id}`}><img className="responsive card-img-top" src={image_url} /></a>
                <div className="card-body">
                  <p className="secondary-text">  
                      <span className="text"> {location} | </span> 
                      <span className="text"> {date} | </span>
                      <span className="amount"> {amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                  </p>
                </div>  
              </div>
          )
        }
      )
    )
  }
  }

  render() {
    return (
      <div className="container">
        <div className="text-center mt-3">
            <h2 className="title mb-2">Receipts</h2>
        </div>
        <div className="row">
          <Category onChange={this.handleFilter} name={"filterCategory"} value={this.state.filterCategory} />
          <div className="col-4">
            <button id="add-btn" className="btn btn-lg" onClick={() => {window.location.href='/form'}}>
                <svg className="bi bi-plus" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z" />
                    <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z" />
                </svg>
            </button>
          </div>
        </div>
        <div className="row">
          {this.renderReceitps()}
        </div>
      </div>
      
    )
  }
}    

export default Receipts