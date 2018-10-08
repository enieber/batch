import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import List from './list/List';
import Add from './add';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Rank de Tarefas</h1>
        </header>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            flex: 1,
            backgroundColor: 'lightgrey',
          }}
        >
          <Add />
          <List />
        </div>
      </div>
    );
  }
}

export default App;
