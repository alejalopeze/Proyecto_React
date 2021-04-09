import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';

import './global.css'

import 'bootstrap/dist/css/bootstrap.css'
//import Badge from './Components/Badge'
import BadgeNew from './pages/BadgeNew'

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const jsx =(
  <div>
    <h1>Hola, soy Aleja</h1>
    <p>Soy ingeniero en Sistemas</p>
  </div>
);*/
const container = document.getElementById('root');
/*reactDom.render(<Badge 
  firstName="Lily" 
  lastName="OHH" 
  jobTitle="QA Engineer"
  twitter="AlejaLopez"
  photo="https://www.megaidea.net/wp-content/uploads/2020/10/Baby-Yoda-Clipart.png"/>,container);*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
reactDom.render(<BadgeNew/>,container);
