import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ completed, deleteTodo, index, task, toggleCompleted }) => {
  return (
    <li>
      <div className="todoInner">
        <p className={completed ? 'strikeText' : ''}>
          {task}
        </p>
        <form className="completedForm">
          <label for={index}>
            {'Completed '}
          </label>
          <input
            checked={completed}
            name={index}
            onClick={toggleCompleted}
            type="checkbox"
            value={completed}
          />
        </form>
      </div>
      <button
        className="destroy"
        onClick={deleteTodo}
        type="button"
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
