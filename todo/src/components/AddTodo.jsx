import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ onChange, onSubmit, value }) => {
  return (
    <div>
      <form
        onSubmit={onSubmit}
      >
        <input
          autoFocus
          name="addTodo"
          onChange={onChange}
          type="text"
          value={value}
        />
        <button
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
