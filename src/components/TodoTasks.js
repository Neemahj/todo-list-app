import { useState, useEffect } from "react";
import { apiUrl } from "./TodoForm";
import axios from "axios";

const TodoTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const { data } = await axios.get(apiUrl);
        setTasks(data);
      } catch {
        console.log("DISPLAY ERROR");
      }
    };
    getTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => {
        return (
          <div className="task-container" key={task.id}>
            <h4 className="task-title">{task.title}</h4>
            <p className="task-dec">{task.decriptions}</p>
          </div>
        );
      })}
    </div>
  );
};
export default TodoTasks;
