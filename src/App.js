import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoTasks from "./components/TodoTasks";

function App() {
  return (
    <div className="container">
      <Header />
      <TodoForm />
      <TodoTasks />
    </div>
  );
}

export default App;
