import React from 'react';

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
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
