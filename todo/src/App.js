import React, { Component } from 'react';
import TodoMain from './components/TodoMain';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      todos: [],
    };
  }
  render() {
    return (
      <div>
        <TodoMain>
        </TodoMain>
      </div>
    );
  }
}

export default App;
