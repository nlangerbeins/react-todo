import React from 'react';
import style from './InputWithLabel.module.css';

const InputWithLabel = ({
  id,
  name,
  type = 'text',
  todoTitle,
  onInputChange,
}) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <>
      <input
        id={id}
        type={type}
        value={todoTitle}
        name={name}
        onChange={onInputChange}
        ref={inputRef}
        className={style.formInput}
        placeholder="Type your new task"
      />
    </>
  );
};

export default InputWithLabel;
