import React from 'react';
import Login from './login';
import Home from './home';
import { BrowserRouter as Router, Route,Switch, Redirect } from 'react-router-dom'


import './App.css';
import Logout from './logout';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/logout" component={Logout} />
          
          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
