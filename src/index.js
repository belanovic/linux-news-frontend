import React from 'react';
import ReactDom from 'react-dom';
import './styleTypography.css';
import './styleLayout.css';
import './styleNavigation.css';
import App from './App.js';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDom.render(<Router><App /></Router>, document.getElementById('root'));