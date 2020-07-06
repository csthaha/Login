import React from 'react';
import Login from './components/login'
import Home from './components/home'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/home" component={Home}/>
        </Switch>
        <Redirect from="/" to="/login" />
      </div>
    </Router>
  );
}

export default App;
