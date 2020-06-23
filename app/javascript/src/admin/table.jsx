import React from "react";
import Receipt from "../report/receipt"


const green = '#50d890';
const red = '#ef5675';
const orange = '#ffa600';

const RenderTable = ({ data, onChange, checked }) => {

    const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date))
    return sorted.map((expense, index) => {
       const { id, location, date, category, merchant, amount, payment_method, note, image, status, user, split } = expense 

       return (
          <tr key={id}>
          {status == 'approved' ? <td></td>: 
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
             </td> }
             <td>{date}</td>
             <td>{user}</td>
             <td>{location}</td>
             <td>{category}</td>
             <td>{split}</td>
             <td>{merchant}</td>
             <td className="amount">{amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
             <td>{payment_method}</td>
             <td>{note}</td>
             {
               (() => {
                  if (status === 'approved')
                     return <td style={{color: green, fontStyle: 'italic'}}>{status}</td>
                  if (status === 'rejected')
                     return <td style={{color: red, fontStyle: 'italic'}}>{status}</td>
                  else (status === 'approved')
                     return <td style={{color: orange, fontStyle: 'italic'}}>{status}</td>
               })()
            }
             { image == null ? 
             <td></td> : <td><Receipt image={image} category={category} amount={amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} date={date} /></td> }
          </tr>
       )
    })
 }

 export default RenderTable