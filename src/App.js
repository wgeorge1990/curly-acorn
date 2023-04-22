import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  function addTodo(e) {
    e.preventDefault();
    setTodos([...todos, value]);
    setValue("");
  }

  function handleNewTodo(e) {
    e.preventDefault();
    setValue(e.target.value);
  }

  return (
    <div className="App">
      <div className='m-2'>
        <input className="p-3 m-1" type='text' value={value} onChange={e => handleNewTodo(e)} />
        <div className='btn btn-warning m-2' onClick={e => addTodo(e)}>Add Todo</div>
      </div>
      <div className="col-12">
        {todos.map(todo => <Todo key={todo} text={todo} />)}
      </div>
    </div>
  );
}
