import React from 'react';

import './App.css';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App m-5">
      <TodoInput />
      <TodoList />

    </div>
  );
}

export default App;
