import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login/login';

import './home.scss';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Login />,
    document.body.appendChild(document.createElement('div')),
  )
})
