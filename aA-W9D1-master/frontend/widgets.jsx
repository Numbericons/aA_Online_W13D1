
import ReactDOM from 'react-dom';
import React from 'react';
import Root from './root';
import Clock from './clock';

document.addEventListener('DOMContentLoaded', (event) => {
    const main = document.getElementById("main");
    ReactDOM.render(<Root />, main);
});