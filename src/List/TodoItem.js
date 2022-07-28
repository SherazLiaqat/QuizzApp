import React from "react";
import { TiDelete } from "react-icons/ti";
import { FiEdit } from "react-icons/fi";
const TodoItem = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul className="allTodos">
      {todos.map((t) => (
        // <li className="singleTodo">
        //   <span className="todoText" key={t.id}>
        //     {t.todo}
        //   </span>
        //   <button className="edit" onClick={() => handleEdit(t.id)}><FiEdit /></button>
        //   <button className="delete" onClick={() => handleDelete(t.id)}><TiDelete/></button>
        // </li>
        <div className="todoStyle">
          <TiDelete onClick={() => handleDelete(t.id)} />
          <div className="editBtn">
            <FiEdit onClick={() => handleEdit(t.id)} />
          </div>

          <li style={{ marginLeft: "20px", color: "#20b2aa" }} key={t.id}>
            {t.todo}
          </li>
        </div>
      ))}
    </ul>
  );
};

export default TodoItem;
