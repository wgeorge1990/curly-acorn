import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {
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
      <form>
        <input type='text' value={value} onChange={e => handleNewTodo(e)} />
        <button onClick={e => addTodo(e)}>Add Todo</button>
      </form>
      <h1 className='header'>My Todos</h1>
      <div className="col-12">
        {todos.map(todo => <Todo key={todo} text={todo} />)}
      </div>
    </div>
  );
}

export default App;
