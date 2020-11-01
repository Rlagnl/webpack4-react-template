// 引入样式文件，用于清除浏览器默认样式
import './assets/css/cssreset-min.css'
import './assets/css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Demo from './Demo';

ReactDOM.render(
  <React.StrictMode>
    <Demo />
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);

