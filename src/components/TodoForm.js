import React from "react";
import { useState } from "react";

const TodoForm = () => {
  const [input, setInput] = useState({ title: "", description: "" });

  return (
    <form>
      <div className="input-field">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value=""
            required
          />
        </label>
      </div>

      <div className="input-field">
        <label>
          Descriptiom:
          <input
            type="text"
            name="description"
            value=""
            required
          />
        </label>
      </div>

      <button className="btn-add" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
