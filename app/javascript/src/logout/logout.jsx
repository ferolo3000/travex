import React from 'react'

class Logout extends React.Component {

    render() {
        return(
            <React.Fragment>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1" id="brand">travex</span>
                </nav>
                <div className="container">
                    <div className="text mb-2">
                        <div>
                            <h2 className="mt-5 title text-center">You are now signed out of travex</h2>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <a id="login-id" className="link" href="/">Login again</a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Logout