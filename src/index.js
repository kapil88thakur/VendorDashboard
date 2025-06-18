import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

const token = localStorage.getItem('token'); // or however you store it
console.log("token is:",token);
//const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2MxYjM5ZDEzZTA1M2JkZDczNzhhNTEiLCJzaG9wSWQiOiI2N2MzM2NlNTIxOWNiZjk3Mjg0NTIxMDAiLCJpYXQiOjE3NDQ3OTM3ODYsImV4cCI6MTc0NDc5NzM4Nn0.Vugis0OOKOUKsD318b2FQqRqE0JphNjds0hOwvsCWbE';
const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new ApolloClient({
  uri: process.env['API_URI'],
  cache: new InMemoryCache(),
  headers:{
    //authorization:localStorage.getItem("token")||""
    Authorization: token ? token : '',
  }
});

root.render(
  <ApolloProvider client={client}>
      <BrowserRouter>
          <App />
      </BrowserRouter>

  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
