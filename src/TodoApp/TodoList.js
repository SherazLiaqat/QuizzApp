import React from "react";
import { FiEdit } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";
const TodoList = (props) => {
  return (
    <>
      <ol>
        {props.todos.map((item) => {
          return (
            <div className="todoList" key={item.id}>
              <span
                className="delete"
                onClick={() => props.hanldeDelete(item.id)}
              >
                <TiDelete />
              </span>
              <span className="edit"   onClick={() => props.handleEdit(item.id)}>
                <FiEdit />
              </span>
              <li>{item.input}</li>
            </div>
          );
        })}
      </ol>
    </>
  );
};

export default TodoList;
