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
                        <div>
                            <p className="mt-3 content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim blandit volutpat maecenas volutpat. Est ultricies integer quis auctor elit sed vulputate mi sit. Ac turpis egestas maecenas pharetra. Nisi est sit amet facilisis magna etiam. Eleifend mi in nulla posuere sollicitudin. Elementum sagittis vitae et leo duis ut diam. Velit aliquet sagittis id consectetur purus ut faucibus. Odio euismod lacinia at quis risus. Odio eu feugiat pretium nibh ipsum consequat nisl.
                            </p>
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