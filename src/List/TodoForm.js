import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        placeholder="Enter Item"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button style={{ background: "#eaedef" }} type="submit">
        {" "}
        {editId ? <FiEdit /> : <AiFillPlusCircle />}
      </button>
    </form>
  );
};

export default TodoForm;
