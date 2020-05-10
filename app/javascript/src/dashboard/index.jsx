import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard'

import './dashboard.scss';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Dashboard />,
    document.body.appendChild(document.createElement('div')),
  )
})
