import React, { Component } from 'react';
import TodoMain from './components/TodoMain';
import AddTodo from './components/AddTodo';
import TodoDisplay from './components/TodoDisplay';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      todos: [],
    };
  }
  componentDidMount() {
    const backupTodos = JSON.parse(window.localStorage.getItem('Todos') || '[]');
    if (backupTodos) {
      this.setState({
        todos: backupTodos,
      });
    }
  }
  deleteTodo = (e) => {
    const newTodos = this.state.todos;
    const index = Number(e.target.id);
    newTodos.splice(index, 1);
    this.setState({
      todos: newTodos
    });
    window.localStorage.setItem('Todos', JSON.stringify(this.state.todos));
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
  toggleCompleted = (e) => {
    const newTodos = this.state.todos;
    const index = Number(e.target.name);
    newTodos[index].completed = !newTodos[index].completed;
    this.setState({
      todos: newTodos
    });
    window.localStorage.setItem('Todos', JSON.stringify(this.state.todos));
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
        <TodoDisplay
          deleteTodo={this.deleteTodo}
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
        />
        </TodoMain>
      </div>
    );
  }
}

export default App;
