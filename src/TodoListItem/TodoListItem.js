import React from 'react';
import style from './TodoListItem.module.css';

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

export default TodoListItem;
