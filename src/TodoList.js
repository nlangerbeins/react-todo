import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
  {
    id: 1,
    title: 'Complete assignment',
  },
  {
    id: 2,
    title: 'Read React book',
  },
  {
    id: 3,
    title: 'Do not forget about JS',
  },
];

const TodoList = () => {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem key={item.id} todo={item} />
      ))}
    </ul>
  );
};

export default TodoList;
