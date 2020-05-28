import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form'

import './form.scss';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Form />,
    document.body.appendChild(document.createElement('div')),
  )
})
