import React from 'react';
import ReactDOM from 'react-dom';
import Receipts from './receipts'

import './receipts.scss';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Receipts />,
    document.body.appendChild(document.createElement('div')),
  )
})