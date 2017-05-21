import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import ComponentHeader from './components/header'
import ComponentFooter from './components/footer'
import ComponentBody from './components/body'


ReactDOM.render(
	<App />,
	document.getElementById('root')
);



registerServiceWorker();
