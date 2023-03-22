import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Condition from './Condition';
import Deco from './Deco';
import State from './State';
import Crud from './Crud';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>
);


