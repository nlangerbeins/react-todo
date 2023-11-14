const InputWithLabel = ({ todoTitle, onInputChange, label }) => {
  return (
    <>
      <label htmlFor="todoTitle">{label} </label>
      <input
        id="todoTitle"
        type="text"
        value={todoTitle}
        name="title"
        onChange={onInputChange}
      />
    </>
  );
};

export default InputWithLabel;
