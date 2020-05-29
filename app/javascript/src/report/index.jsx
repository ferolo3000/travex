import React from 'react';
import ReactDOM from 'react-dom';
import Report from './report'

import './report.scss';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Report />,
    document.body.appendChild(document.createElement('div')),
  )
})