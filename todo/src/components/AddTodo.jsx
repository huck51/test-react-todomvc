import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ onChange, onSubmit, value }) => {
  return (
    <div>
      <form
        className="addTodoForm"
        onSubmit={onSubmit}
      >
        <input
          autoFocus
          className="searchBar"
          name="addTodo"
          onChange={onChange}
          type="text"
          value={value}
        />
        <button
          className="addBtn"
          onClick={onSubmit}
          type="submit"
        >
          +
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
};

AddTodo.defaultProps = {
  value: '',
};

export default AddTodo;
