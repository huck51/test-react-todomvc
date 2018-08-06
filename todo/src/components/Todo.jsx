import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ completed, deleteTodo, index, task, toggleCompleted }) => {
  return (
    <li>
      <div>
        <p>
          {task}
        </p>
        <form>
          <label for={index}>
            {'Completed '}
          </label>
          <input
            checked={completed}
            name={index}
            type="checkbox"
            value={completed}
            onClick={toggleCompleted}
          />
        </form>
      </div>
      <button
        type="button"
        onClick={deleteTodo}
      >
        <strong id={index}>
          X
        </strong>
      </button>
    </li>
  );
};

Todo.propTypes = {
  completed: PropTypes.bool,
  deleteTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  task: PropTypes.string.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
};

Todo.defaultProps = {
  completed: false,
};

export default Todo;
