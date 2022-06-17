import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoTasks from "./components/TodoTasks";
export const apiUrl = "https://robottodoapi.herokuapp.com/api/v1/todo/";


function App() {
  const [tasks, setTasks] = useState([]);
  const getTasks = async () => {
    try {
      const { data } = await axios.get(apiUrl);
      setTasks(data);
    } catch {
      console.log("DISPLAY ERROR");
    }
  };
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div className="container">
      <Header />
      <TodoForm  getTasks={getTasks} />
      <TodoTasks tasks={tasks} getTasks={getTasks} />
    </div>
  );
}

export default App;
