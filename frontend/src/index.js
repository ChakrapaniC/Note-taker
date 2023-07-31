import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import  {notesApi}  from './features/api/apiSlice'
import { Provider } from 'react-redux';
import store from './store/Store';
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 
    <Provider store={store}>
      <ApiProvider api={notesApi}>
        <App />
        </ApiProvider>
    </Provider>
  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

