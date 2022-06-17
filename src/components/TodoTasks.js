import { useState, useEffect } from "react";
import { apiUrl } from "./TodoForm";
import axios from "axios";
import { MdDelete } from "react-icons/md";

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

  const handleDelete = async (id) => {
    await axios.delete(apiUrl + id + "/");
  };

  return (
    <div>
      {tasks.map((task) => {
        return (
          <div className="task-container" key={task.id}>
            <div className="task-content">
              <h4>{task?.title}</h4>
              <p>{task?.decriptions}</p>
            </div>

            <div className="task-icons">
              <input className="check-box" type="checkbox" />
              <MdDelete style={{ fontSize: 25 }} value="Delete" onClick={() => {handleDelete(task.id)}}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TodoTasks;
