import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import ListenItem from './ListItem';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      chores: [
        {
          id: 1,
          name: "take out the trash",
          description: "trash removal from both bins",
          completed: true
        },
        {
          id: 2,
          name: "eat spaghetti",
          description: "eat pascetti",
          completed: false
        }
      ]
    }
  }
  render() {
    const { chores } = this.state;
    return (
      <div className="App">
        <h1>Chores</h1>
        <ul>
          {chores.map(chore => (

          ))}
        </ul>
      </div>
    )
  }
}

export default App;
