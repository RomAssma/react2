import React from 'react';
import './App.css';
import PlayersList from './PlayersList';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = ()=> {
  return (
    <div className="App">
      <h1> FIFA player cards </h1>
      <PlayersList/>
    </div>
  );
}

export default App;
