import React from "react";

const Payment = ({name, value, onChange}) => {
    return(
        <div className="form-group col-md-3">
            <label forhtml="payID">
                <svg className="bi bi-credit-card mr-1 mb-1" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z" clipRule="evenodd" />
                    <rect width="3" height="3" x="2" y="9" rx="1" />
                    <path d="M1 5h14v2H1z" />
                </svg> Payment
            </label>
            <select name={name}  className="category-options" id="categoryID" value={value} onChange={onChange}>
                <option value="All">All</option>
                <option value="Cash">💵  Cash</option>
                <option value="Credit Card">💳  Credit Card</option>
                <option value="Other Payment Method">💰  Other Payment Method</option>
            </select>
        </div>
        
    )

}

export default Payment