import React from 'react';
import InputWithLabel from '../InputWithLabel/InputWithLabel.js';
import style from './AddTodoForm.module.css';

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = React.useState('');

  const handleTitleChange = (e) => {
    let newTodoTitle = e.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (todoTitle === '') {
      return;
    }
    onAddTodo(todoTitle);
    setTodoTitle('');
  };

  return (
    <form onSubmit={handleAddTodo} className={style.form}>
      <InputWithLabel
        id="todoTitle"
        name="title"
        todoTitle={todoTitle}
        onInputChange={handleTitleChange}
      />
      <button type="submit" className={style.btnAdd}>
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
