import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/App';

import { inDev } from './utils/helpers';

// Application to Render
const app = <Application title='react hooks' />;

// Render application in DOM
ReactDOM.render(app, document.getElementById('app'));

// Hot module replacement
if (inDev() && module.hot) module.hot.accept();