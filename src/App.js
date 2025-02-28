import React, { Fragment } from 'react';
import './index.css';
import './App.css';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';  // ✅ Match the exact filename

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
