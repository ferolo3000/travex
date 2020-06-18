import React from "react";

import './dashboard.scss'

const statsTable = ({ data }) => {

    const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date))
    return sorted.map((expense, index) => {
       const { id, location, date, category, merchant, amount, payment_method, note } = expense 

       return (
          <tr key={id}>
             <td>{date}</td>
             <td>{location}</td>
             <td><a href={`/expenses/${id}`}>{category}</a></td>
             <td className="amount">{amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
             <td>{payment_method}</td>
          </tr>
       )
    })
 }

 export default statsTable