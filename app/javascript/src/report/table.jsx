import React from 'react';

const Table = ({ data, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }



    const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date))
    return sorted.map((expense, index) => {
       const { id, location, date, category, merchant, amount, payment_method, image_url } = expense 
       return (
          <tr key={id}>
             <td>
                <label>
                  <input
                    type="checkbox" />
                </label>
             </td>
             <td>{date}</td>
             <td>{location}</td>
             <td>{category}</td>
             <td>{merchant}</td>
             <td className="amount">{amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
             <td>{payment_method}</td>
             <td></td>
          </tr>
       )
    })
};

export default Table;