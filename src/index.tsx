import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App/App';
import './assets/font/Darker_Grotesque/stylesheet.css';
import './assets/font/mustica_pro/stylesheet.css';
import './assets/font/Syne/stylesheet.css';
import './assets/font/transforma_mix/stylesheet.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
