import React from "react";

export const Todoitem = ({ todo = {}, index = 0, handleToggleCompletion }) => {
  return (
    <div>
      {
        <li
          className="flex flex-row"
          key={todo.id}
          onClick={() => handleToggleCompletion(index)}
        >
          <input type="checkbox" checked={todo.checked} />
          <p
            className="text-lg font-semibold max-w-xs hover:font-bold"
            style={{
              textDecoration: todo.checked ? "line-through" : "none",
            }}
          >
            {todo.text}
          </p>
        </li>
      }
    </div>
  );
};
