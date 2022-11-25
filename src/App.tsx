import './App.css'
import { TodoListView } from './components/todo-list';
import { createTodo } from './stores/todo';
import { createTodoList } from './stores/todo-list';

function App() {
  const store = createTodoList([
    createTodo("Get Coffe"),
    createTodo("Write simple code")
  ]);

  return (
    <TodoListView todoList={store} />
  );
}

export default App
