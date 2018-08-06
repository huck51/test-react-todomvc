import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoDisplay = ({ deleteTodo, todos, toggleCompleted }) => {
  return todos.length !== 0 ? (
    <div>
      <ul>
        <div>
          {
            todos.length === 1 ? (
              <p className="counterText">
                <strong>
                  {todos.length + ' '}
                </strong>
                Item
              </p>
            ) : (
              <p className="counterText">
                <strong>
                  {todos.length + ' '}
                </strong>
                Items
              </p>
            )
          }
        </div>
        {todos.map((todo, index) => (
          <Todo
            completed={todo.completed}
            deleteTodo={deleteTodo}
            index={index}
            task={todo.task}
            toggleCompleted={toggleCompleted}
          />
        ))
        }
      </ul>
    </div>
  ) : (
    <h3>
      <strong>
        {'0 '}
      </strong>
       Items. Add a task to your todo list...
    </h3>
  );
};

TodoDisplay.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleCompleted: PropTypes.func.isRequired,
};

export default TodoDisplay;
