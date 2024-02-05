import React from 'react';
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, removeItem }) => {
  const date = new Date(todo.date).toLocaleDateString('en-us', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <li className={style.ListItem}>
      <span className={style.todoText}>{todo.title}</span>
      <div className={style.todoInfo}>
        <span className={style.todoDate}>{date}</span>
        <button
          type="button"
          className={style.btnRemove}
          onClick={() => removeItem(todo.id)}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default TodoListItem;
