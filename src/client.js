import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

if (typeof document !== 'undefined') {
  const root = document.getElementById('app');
  ReactDOM.render(<App />, root);
}
