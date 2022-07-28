import React, { useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);
  const hanldeSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const editTodo = todos.find((item) => item.id === editId);
      const updatedTodo = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, input })
          : { id: t.id, input: t.input }
      );
      setTodos(updatedTodo);
      setInput("");
      setEditId(0);
      return;
    }

    if (input !== "") {
      setTodos([{ id: `${input}-${Date.now()}`, input }, ...todos]);
      setInput("");
    }
  };
  const hanldeDelete = (id) => {
    const delTodo = todos.filter((item) => item.id !== id);
    setTodos([...delTodo]);
  };
  const handleEdit = (id) => {
    const editTodo = todos.find((item) => item.id === id);
    setInput(editTodo.input);
    setEditId(id);
  };
  return (
    <>
      <div className="todo">
        <h1>Todo App</h1>
        <TodoForm
          editId={editId}
          input={input}
          setInput={setInput}
          hanldeSubmit={hanldeSubmit}
        />
        <TodoList
          input={input}
          todos={todos}
          hanldeDelete={hanldeDelete}
          handleEdit={handleEdit}
        />
      </div>
    </>
  );
};

export default Todo;
