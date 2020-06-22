import React from 'react';
import ReactDOM from 'react-dom';
import Admin from './adminReport'

import './admin.scss';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Admin />,
    document.body.appendChild(document.createElement('div')),
  )
})