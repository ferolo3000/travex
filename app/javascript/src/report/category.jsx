import React from "react";

const Category = ({name, value, onChange}) => {
    return(
        <div className="form-group col-md-3">
            <label forhtml="categoryID">
                <svg className="bi bi-bag mr-1 mb-1" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z" clipRule="evenodd" />
                    <path d="M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z" />
                </svg> Category
            </label>
            <select name={name}  className="category-options" id="categoryID" value={value} onChange={onChange}>
                <option value="All">All</option>
                <option value="Air Travel">✈  Air Travel</option>
                <option value="Lodging">🏨  Lodging</option>
                <option value="Meals & Entertainment">🍽  Meals & Entertainment</option>
                <option value="Phone & Internet">📲  Phone & Internet</option>
                <option value="Transportation">🚖  Transportation</option>
                <option value="Other Expense">🧾  Other Expense</option>
            </select>
        </div>
        
    )

}



export default Category