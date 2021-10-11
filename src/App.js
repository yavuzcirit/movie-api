import React from 'react';
import { Route, Switch } from 'react-router-dom';

// pages
import Home from './pages/home'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
