import React from 'react';

const AddTodoForm = (props) => {
  function handleAddTodo(e) {
    e.preventDefault();
    const form = e.target;
    const todoTitle = form['title'].value;

    props.onAddTodo(todoTitle);
    form.reset();
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title: </label>
      <input id="todoTitle" type="text" name="title" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
