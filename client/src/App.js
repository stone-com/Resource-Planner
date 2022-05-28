import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages from pages folder - login and signup
import Login from './pages/Login';
import Signup from './pages/Signup';

import ProjectButton from './component/ProjectButton';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
  <ApolloProvider client={client}>
      <Router>
        <div >
        <Routes>
          
          <Route 
                path="/login" 
                element={<Login />}
              />
          <Route 
                path="/signup" 
                element={<Signup />}
              />
          
          </Routes>
      

      
        </div>
      </Router>

  </ApolloProvider>
  )
}

export default App;
