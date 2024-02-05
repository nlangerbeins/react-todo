import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem.js';
import style from './TodoList.module.css';
import PropTypes from 'prop-types';

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

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoList;
