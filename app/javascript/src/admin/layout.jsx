import React from 'react';
import { safeCredentials } from '@utils/fetchHelper';

import './admin.scss';

function handleLogout(e) {

    fetch('/api/sessions', safeCredentials({
      method: 'DELETE',
    }))
    .then(response => {
      localStorage.clear();
      window.location.href = '/logout';
    })
    .catch(error => console.log(error))
  }


const Layout = (props) => {
    return(
    <div className="container-fluid">
        <div className="row min-vh-100 flex-column flex-md-row">
          <aside className="col-12 col-md-2 p-0 flex-shrink-1 sidebar-container">
              <nav id="sidebar" className="navbar navbar-expand sidebar-navigation flex-md-column flex-row align-items-start py-2">
                    <div className="collapse navbar-collapse ">
                      <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between navigation">
                          <p className="nav-item m-2 mr-5" id="brand">travex</p>
                          <li className="nav-item link">
                              <a className="nav-link pl-0" href="/admin" name="standard">
                                <svg className="bi bi-columns mr-1" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M15 2H1v12h14V2zM1 1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V2a1 1 0 00-1-1H1z" clipRule="evenodd"/>
                                  <path fillRule="evenodd" d="M7.5 14V2h1v12h-1zm0-8H1V5h6.5v1zm7.5 5H8.5v-1H15v1z" clipRule="evenodd"/>
                                </svg> <span className="d-none d-md-inline">Home</span>
                              </a>
                          </li>
                          <li className="nav-item link">
                              <a className="nav-link pl-0" href="/logout" onClick={handleLogout}>
                                <svg className="bi bi-box-arrow-left mr-1" width="1.1em" height="1.1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M4.354 11.354a.5.5 0 000-.708L1.707 8l2.647-2.646a.5.5 0 10-.708-.708l-3 3a.5.5 0 000 .708l3 3a.5.5 0 00.708 0z" clipRule="evenodd"/>
                                  <path fillRule="evenodd" d="M11.5 8a.5.5 0 00-.5-.5H2a.5.5 0 000 1h9a.5.5 0 00.5-.5z" clipRule="evenodd"/>
                                  <path fillRule="evenodd" d="M14 13.5a1.5 1.5 0 001.5-1.5V4A1.5 1.5 0 0014 2.5H7A1.5 1.5 0 005.5 4v1.5a.5.5 0 001 0V4a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v8a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5v-1.5a.5.5 0 00-1 0V12A1.5 1.5 0 007 13.5h7z" clipRule="evenodd"/>
                                </svg> <span className="d-none d-md-inline">Log Out</span>
                              </a>
                          </li>
                      </ul>
                  </div>
              </nav>
          </aside>
          {props.children}
        </div>
    </div>
    )
}

export default Layout;
