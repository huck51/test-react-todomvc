import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TodoMain = ({ children }) => {
  return (
    <div>
      <h1>
        Genius Plaza To-Do List
      </h1>
      {children}
    </div>
  );
};

TodoMain.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TodoMain;
