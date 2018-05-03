import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import HelloWorld from './HelloWorld';
import NameForm from './form';

/*

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/

/*
ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('root')
);
*/


ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
