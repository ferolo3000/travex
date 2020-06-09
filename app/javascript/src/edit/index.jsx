import React from 'react';
import ReactDOM from 'react-dom';
import Edit from './edit'

import './edit.scss';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Edit />,
    document.body.appendChild(document.createElement('div')),
  )
})
