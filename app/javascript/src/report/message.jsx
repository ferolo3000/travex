import React from "react";

class Message extends React.Component {

    render() {
        return (
            <div className="text-center mt-5 mb-5">
                <img src="https://img.icons8.com/cotton/64/000000/delete-receipt.png"/>
                <h3 className="text-center mt-2">You don't have any expenses</h3>
            </div>
        )
    }

}

export default Message