import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//ToDo MOve to env
const apiEndpoint = 'https://fluid-service-backend.onrender.com/api/graphql'
console.log(apiEndpoint);
const API_URL = `${apiEndpoint}`;

const httpLink = createHttpLink({
  uri: API_URL,
  headers: {
    'X-TRB-Platform': 'web',
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client} >
    <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
