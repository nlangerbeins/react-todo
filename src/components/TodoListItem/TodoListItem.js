import React from 'react';
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, removeItem }) => {
  return (
    <li className={style.ListItem}>
      {todo.title}
      <button
        type="button"
        className={style.btnRemove}
        onClick={() => removeItem(todo.id)}
      >
        Remove
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object,
  removeItem: PropTypes.func,
};

export default TodoListItem;
