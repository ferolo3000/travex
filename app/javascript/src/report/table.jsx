import React from "react";
import Receipt from "./receipt"

const RenderTable = ({ data, onChange, checked }) => {

    const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date))
    return sorted.map((expense, index) => {
       const { id, location, date, category, merchant, amount, payment_method, note, image } = expense 

       return (
          <tr key={id}>
             <td>
                <label>
                  <input
                     id={id}
                     type="checkbox"
                     name={id}
                     onChange={onChange}
                     checked={id == checked}
                  />
                </label>
             </td>
             <td>{date}</td>
             <td>{location}</td>
             <td><a href={`/expenses/${id}`}>{category}</a></td>
             <td>{merchant}</td>
             <td className="amount">{amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
             <td>{payment_method}</td>
             <td>{note}</td>
             { image == null ? 
             <td></td> : <td><Receipt image={image} category={category} amount={amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} date={date} /></td> }
             
          </tr>
       )
    })
 }

 export default RenderTable