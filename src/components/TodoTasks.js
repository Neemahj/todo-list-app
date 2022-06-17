import axios from "axios";
import { MdDelete } from "react-icons/md";
import { apiUrl } from "../App";

const TodoTasks = ({ tasks, getTasks }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(apiUrl + id + "/");
    } catch (e) {
      console.log(e);
    }
    getTasks();
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
              <MdDelete
                style={{ fontSize: 25 }}
                value="Delete"
                onClick={() => {
                  handleDelete(task.id);
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TodoTasks;
