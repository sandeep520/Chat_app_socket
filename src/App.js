
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import { Provider } from 'react-redux';
import store from '../src/store';


import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import Home from './home';
import Chat from './Components/chat';
import chat from './Components/chat';
// import chat from './Components/chat';
// import Join from './components/join';
// import Chat from './components/chat';

import PrivateRoute from './Routing/privateRouting';
import PublicRoute from './Routing/publicRouting';



function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>

          <PublicRoute restricted={false} component={Login} path="/login" exact />
          <PublicRoute restricted={false} component={Signup} path="/signup" exact />
          <Provider store={store}>
          <PrivateRoute component={chat} path="/chat" exact />
          </Provider>

        </Switch>

      </BrowserRouter>
      {/* <Provider store={store}>
        <Chat />
      </Provider> */}
    </>
  );
}


export default App;

