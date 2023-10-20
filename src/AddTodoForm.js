import React from 'react';

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = React.useState('');

  function handleTitleChange(e) {
    let newTodoTitle = e.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(e) {
    e.preventDefault();
    onAddTodo({ title: todoTitle, id: Date.now() });
    setTodoTitle('');
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title: </label>
      <input
        id="todoTitle"
        type="text"
        value={todoTitle}
        name="title"
        onChange={handleTitleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
