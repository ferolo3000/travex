import React from 'react';
import ReactDOM from 'react-dom';
import Standard from "./standard"
import Form from "./form"
import Stats from "./stats"
import Report from "./report"

import './dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      render:''
    }
  }

  handleClick(compName, e){
    console.log(compName);
    this.setState({render:compName});
  }
  _renderSubComp(){
    switch(this.state.render){
      case 'form': return <Form />
      case 'stats' : return <Stats />
      case 'report': return <Report />
      case 'standard': return <Standard/>
      default: return <h2 className="text-center">Welcome to Dashboard</h2>
    }
  }

  render() {
    return(
    <React.Fragment>
    <div className="container-fluid">
      <div className="row min-vh-100 flex-column flex-md-row">
          <aside className="col-12 col-md-2 p-0 flex-shrink-1 sidebar-container">
              <nav id="sidebar" className="navbar navbar-expand sidebar-navigation flex-md-column flex-row align-items-start py-2">
                  <div className="collapse navbar-collapse ">
                      <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between navigation">
                          <p className="nav-item m-2 mr-5" id="brand">travex</p>
                          <li className="nav-item link">
                              <a className="nav-link pl-0" href="#" name="standard" onClick={this.handleClick.bind(this, 'standard')}>
                                <svg class="bi bi-columns mr-3" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M15 2H1v12h14V2zM1 1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V2a1 1 0 00-1-1H1z" clip-rule="evenodd"/>
                                  <path fillRule="evenodd" d="M7.5 14V2h1v12h-1zm0-8H1V5h6.5v1zm7.5 5H8.5v-1H15v1z" clipRule="evenodd"/>
                                </svg> <span className="d-none d-md-inline">Dashboard</span>
                              </a>
                          </li>
                          <li className="nav-item link">
                              <a className="nav-link pl-0" href="#" name="form" onClick={this.handleClick.bind(this, 'form')}>
                                <svg className="bi bi-file-earmark-text mr-3" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4 1h5v1H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6h1v7a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2z"/>
                                  <path d="M9 4.5V1l5 5h-3.5A1.5 1.5 0 019 4.5z"/>
                                  <path fillRule="evenodd" d="M5 11.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm0-2a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0-2a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" clipRule="evenodd"/>
                                </svg> <span className="d-none d-md-inline">Expenses</span>
                              </a>
                          </li>
                          <li className="nav-item link">
                              <a className="nav-link pl-0" href="#" name="stats" onClick={this.handleClick.bind(this, 'stats')}>
                                <svg className="bi bi-clipboard-data mr-3" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z" clipRule="evenodd"/>
                                  <path fillRule="evenodd" d="M9.5 1h-3a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z" clipRule="evenodd"/>
                                  <path d="M4 11a1 1 0 112 0v1a1 1 0 11-2 0v-1zm6-4a1 1 0 112 0v5a1 1 0 11-2 0V7zM7 9a1 1 0 012 0v3a1 1 0 11-2 0V9z"/>
                                </svg> <span className="d-none d-md-inline">Stats</span>
                              </a>
                          </li>
                          <li className="nav-item link">
                              <a className="nav-link pl-0" href="#"  name="report" onClick={this.handleClick.bind(this, 'report')}>
                                <svg className="bi bi-layout-text-window-reverse mr-3" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M2 1h12a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1zm12-1a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h12z" clipRule="evenodd"/>
                                  <path fillRule="evenodd" d="M5 15V4H4v11h1zM.5 4h15V3H.5v1zM13 6.5a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h5a.5.5 0 00.5-.5zm0 3a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h5a.5.5 0 00.5-.5zm0 3a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h5a.5.5 0 00.5-.5z" clipRule="evenodd"/>
                                </svg> <span className="d-none d-md-inline">Report</span>
                              </a>
                          </li>
                          <li className="nav-item link">
                              <a className="nav-link pl-0" href="#">
                                <svg className="bi bi-shield-lock mr-3" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M5.443 1.991a60.17 60.17 0 00-2.725.802.454.454 0 00-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 008 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 002.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 00-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 012.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 01-2.418 2.3 6.942 6.942 0 01-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 01-1.007-.586 11.192 11.192 0 01-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 012.415 1.84a61.11 61.11 0 012.772-.815z" clipRule="evenodd"/>
                                  <path d="M9.5 6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                                  <path d="M7.411 8.034a.5.5 0 01.493-.417h.156a.5.5 0 01.492.414l.347 2a.5.5 0 01-.493.585h-.835a.5.5 0 01-.493-.582l.333-2z"/>
                                </svg> <span className="d-none d-md-inline">Privacy & Security</span>
                              </a>
                          </li>
                          <li className="nav-item link">
                              <a className="nav-link pl-0" href="#">
                                <svg className="bi bi-box-arrow-left mr-3" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
          <main className="col py-3 flex-grow-1">
            <div className="container-fluid">
              {this._renderSubComp()}
            </div>
          </main>
      </div>
    </div>
    </React.Fragment>
    )
  }
}

export default Dashboard;
