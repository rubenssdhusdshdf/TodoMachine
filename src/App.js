
import { TodoCounter } from "../src/TodoCounter";
import { TodoSearch } from "../src/TodoSearch";
import { TodoList } from "../src/TodoList";
import { TodoItem } from "../src/TodoItem";
import "./App.css";


function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />


      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>


      {/* <CreateTodoButton /> */}
    </div>
  );
}


export default App;
