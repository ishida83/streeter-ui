import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Root from './Root';
import Routes from './routes/Routes';
import './styles/index.scss';

render(
  (<Router><Root><Routes /></Root></Router>),
  document.getElementById('root'),
);
