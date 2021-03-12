import React from 'react';
import ReactDom from 'react-dom';
import './styleTypography.css';
import './styleLayout.css';
import './styleNavigation.css';
import App from './App.js';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from './newsContext.js';

ReactDom.render(<Provider><Router><App /></Router></Provider>, document.getElementById('root'));