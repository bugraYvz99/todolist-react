import React, { useState } from "react";
import { List } from "./List";

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setinputValue] = useState("");
  const [id, setId] = useState(0);
  function handleInputChange(e) {
    if (e.target.type === "text") setinputValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue) return;
    setTodos([...todos, { text: inputValue, checked: false, id }]);
    setId(id + 1);
    setinputValue("");
    console.log(todos);
  }
  function handleToggleCompletion(index) {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  }
  function handleDelete() {
    const newTodos = todos.filter((todo) => !todo.checked);
    setTodos(newTodos);
  }
  function handleDeleteAll() {
    const newTodos = [];
    setTodos(newTodos);
  }

  return (
    <div className="relative top-20 flex flex-col items-center gap-5 h-96 ">
      <h1 className=" text-4xl font-bold">Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          className=" text-xl bg-transparent"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="What is your plan"
        />
        <button
          className="relative text-xl outline-double bg-amber-200 rounded-sm hover:font-bold w-16 left-5"
          type="submit"
        >
          Add
        </button>
      </form>

      {todos.length ? (
        <>
          <List
            todos={todos}
            handleToggleCompletion={handleToggleCompletion}
            handleDelete={handleDelete}
            handleDeleteAll={handleDeleteAll}
          />
        </>
      ) : (
        <div>List is empty</div>
      )}
    </div>
  );
};
