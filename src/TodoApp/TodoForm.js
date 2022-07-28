import React from "react";
import { FiEdit } from "react-icons/fi";
import { BsFillPlusCircleFill } from "react-icons/bs";
const TodoForm = (props) => {
  return (
    <>
      <form className="todoForm" onSubmit={props.hanldeSubmit}>
        <input
          type="text"
          placeholder="Enter Item"
          value={props.input}
          onChange={(e) => props.setInput(e.target.value)}
        />
        <button type="submit">
          {props.editId ? <FiEdit /> : <BsFillPlusCircleFill />}
        </button>
      </form>
    </>
  );
};

export default TodoForm;
