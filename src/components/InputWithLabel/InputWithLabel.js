import React from 'react';
import style from './InputWithLabel.module.css';
import PropTypes from 'prop-types';

const InputWithLabel = ({
  id,
  name,
  type = 'text',
  todoTitle,
  onInputChange,
  placeholder,
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
        placeholder={placeholder}
      />
    </>
  );
};

InputWithLabel.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default InputWithLabel;
