import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

if(typeof document !== 'undefined'){
    var root = document.getElementById('app');
    ReactDOM.render(<App />, root);
}