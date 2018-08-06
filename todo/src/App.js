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
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.value.trim()) {
      const todo = {
        completed: false,
        task: this.state.value.trim(),
      };
      const todos = this.state.todos;
      todos.push(todo);
      this.setState({
        value: '',
        todos,
      });
      window.localStorage.setItem('Todos', JSON.stringify(this.state.todos));
    }
  }
  render() {
    return (
      <div>
        <TodoMain>
          <AddTodo
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            value={this.state.value}
          />
        </TodoMain>
      </div>
    );
  }
}

export default App;
