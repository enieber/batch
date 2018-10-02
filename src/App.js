import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import List from './list/List';

class App extends Component {
  render() {
    const data = [
      {
        id: 1,
        title: 'Test',
        description: 'test description',
      },
      {
        id: 2,
        title: 'Test 2',
        description: 'test description',
      },
      {
        id: 3,
        title: 'Test 3',
        description: 'test description',
      }
    ];

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
            alignItems: 'center',
            flex: 1,
            backgroundColor: 'lightgrey',
          }}
        >
          <List
            data={data}
          />
        </div>
      </div>
    );
  }
}

export default App;
