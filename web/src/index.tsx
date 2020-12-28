import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import VideoList from './components/Videos/VideoList';
import VideoForm from './components/Videos/VideoForm';
import Navbar from './components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'
import 'bootswatch/dist/pulse/bootstrap.min.css'
import './index.css'
import CheckOutPage from './pages/CheckOutPage'
import Header from './components/Header/Header';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Navbar />
      <div className="td__container">
        <Switch>
          <Route exact path ="/" component={VideoList} />
          <Route path ="/new-video" component={VideoForm} />
          <Route path ="/update/:id" component={VideoForm} />
          <Route path ="/check-out" component={CheckOutPage} />
        </Switch>
        <ToastContainer autoClose = {1000}/>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
