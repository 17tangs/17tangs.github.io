import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';
import AuthExample from './AuthExample.js';
import 'tachyons';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
