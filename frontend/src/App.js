import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';
import List from './list/List';
import Add from './add';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: {},
      data: []
    };
  };

  async componentDidMount() {
    const response = await fetch('http://10.19.92.47:8088/api/procedure/');
    const data = await response.json();
    this.setState({data});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Rank de Tarefas</h1>
        </header>
        <div
          style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          flex: 1,
          backgroundColor: 'lightgrey'
        }}>
          <Add
            newItemAdd={(newItem) => {
            this.setState({
              data: [
                ...this.state.data,
                newItem
              ]
            });
          }}/>
          <List data={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default App;
