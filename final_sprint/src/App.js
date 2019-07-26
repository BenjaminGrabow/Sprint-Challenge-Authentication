import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LogAndRegi from './Login/LogAndRegi';

function App() {
  return (
    <div className="App">
      <Route path="/" component={LogAndRegi} />
    </div>
  );
}

export default App;
