import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LogAndRegi from './Login/LogAndRegi';
import Jokes from './Jokes';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LogAndRegi} />
      <Route path="/jokes" component={Jokes} />
    </div>
  );
}

export default App;
