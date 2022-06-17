import React from "react";
import { useState } from "react";
import axios from "axios";
import { apiUrl } from "../App";

const TodoForm = ({ getTasks }) => {
  const [input, setInput] = useState({
    title: "",
    decriptions: "",
  });

  const handleChange = (e) => {
    setInput((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(apiUrl, input);
    } catch {
      console.log("ERROR");
    }
    getTasks();
    setInput({
      title: "",
      decriptions: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={input.title}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="input-field">
        <label>
          Description:
          <input
            type="text"
            name="decriptions"
            value={input.decriptions}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="btn">
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
};

export default TodoForm;
