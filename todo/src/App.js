import React, { Component } from 'react';
import TodoMain from './components/TodoMain';
import AddTodo from './components/AddTodo';
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
          <AddTodo />
        </TodoMain>
      </div>
    );
  }
}

export default App;
