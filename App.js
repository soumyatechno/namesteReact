import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('h1', {}, 'Ignition of an Application.');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
