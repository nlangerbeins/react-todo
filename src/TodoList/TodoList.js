import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem.js';
import style from './TodoList.module.css';

const TodoList = ({ todoList, onRemoveTodo }) => {
  return (
    <ul className={style.todoList}>
      {todoList.map((item) => {
        return (
          <TodoListItem key={item.id} todo={item} removeItem={onRemoveTodo} />
        );
      })}
    </ul>
  );
};

export default TodoList;
