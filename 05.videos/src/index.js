import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
  <BrowserRouter basename="/LearningReactWithRedux">
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
)