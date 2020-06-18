import React from 'react';
import ReactDOM from 'react-dom';
import Standard from './standard'

import './dashboard.scss';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Standard />,
    document.body.appendChild(document.createElement('div')),
  )
})
