import React, { Component } from 'react';
import './App.css';
import PeopleContainer from './components/PeopleContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">I2</h1>
        </header>

       <PeopleContainer />

      </div>
    );
  }
}

export default App;
