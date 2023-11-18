
import { TodoCounter } from "../src/TodoCounter";
import { TodoSearch } from "../src/TodoSearch";
import { TodoList } from "../src/TodoList";
import { TodoItem } from "../src/TodoItem";
import { CreateTodoButton } from './CreateTodoButton'
import React from 'react'
import "./App.css";

const defaultTodos = [
  { text: 'Cook', completed: false},
  { text: 'React Course', completed: true},
  { text: 'Install VPN', completed: false},
];

function App() {
  return (
      <React.Fragment>
        <TodoCounter completed={16} total={25} />

        <TodoSearch />
        <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      </React.Fragment>
  );
}


export default App;
