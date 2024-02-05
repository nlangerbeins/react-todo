import React from 'react';
import AddTodoForm from '../AddTodoForm/AddTodoForm.js';
import TodoList from '../TodoList/TodoList.js';
import style from './TodoContainer.module.css';

const TodoContainer = () => {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [sort, setSort] = React.useState('asc');

  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;

  // get access from Airtable
  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };

    try {
      const response = await fetch(
        `${url}?view=Grid%20view&sort[0][field]=title&sort[0][direction]=${sort}`,
        options
      );
      // const response = await fetch(url, options);

      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();

      // sort todo
      // data.records.sort((objectA, objectB) => {
      //   const titleA = objectA.fields.title.toLowerCase();
      //   const titleB = objectB.fields.title.toLowerCase();

      //   if (titleA === titleB) {
      //     return 0;
      //   }

      //   // sort function in ascending order
      //   return titleA < titleB ? -1 : 1;

      //   // sort function in descending order
      //   // return titleA < titleB ? 1 : -1;
      // });

      const todos = data.records.map((todo) => {
        const newTodo = {
          id: todo.id,
          title: todo.fields.title,
        };
        return newTodo;
      });

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSort = () => {
    const toggleSort = sort === 'asc' ? 'desc' : 'asc';
    setSort(toggleSort);
  };

  React.useEffect(() => {
    fetchData();
  }, [sort]);

  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  // to add an item to Airtable
  const addTodo = async (todo) => {
    const airtableData = {
      fields: {
        title: todo,
      },
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
      body: JSON.stringify(airtableData),
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        const message = `Error has ocurred: ${response.status}`;
        throw new Error(message);
      }

      const resp = await response.json();
      const newTodo = { id: resp.id, title: resp.fields.title };
      setTodoList([...todoList, newTodo]);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };

  // remove an item from Airtable
  const removeTodo = async (id) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };

    try {
      const response = await fetch(`${url}/${id}`, options);

      if (!response.ok) {
        const message = `Error has ocurred: ${response.status}`;
        throw new Error(message);
      }

      const newList = todoList.filter((item) => item.id !== id);
      setTodoList(newList);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };

  return (
    <div className={style.container}>
      <h1 className={style.heading}>To do list</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <button className={style.btnToggle} onClick={handleSort}>
        {sort === 'asc' ? 'from Z to A' : 'from A to Z'}
      </button>
      {isLoading ? (
        <p className={style.loading}>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </div>
  );
};

export default TodoContainer;
