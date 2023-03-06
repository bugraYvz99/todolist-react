import React from "react";
import { Todoitem } from "./Todoitem";

export const List = ({
  todos,
  handleToggleCompletion,
  handleDeleteAll,
  handleDelete,
}) => {
  return (
    <div className=" flex flex-col gap-5 ">
      <ul className=" flex flex-col gap-5  break-normal	">
        {todos.map((todo, index) => (
          <Todoitem
            todo={todo}
            index={index}
            handleToggleCompletion={handleToggleCompletion}
          />
        ))}

        <>
          {todos.some((todo) => todo.checked) && (
            <div>
              <button
                className=" text-xl outline-double bg-amber-200 rounded-sm hover:font-bold"
                onClick={handleDelete}
              >
                Delete Selected
              </button>
            </div>
          )}
          <button
            className=" text-xl outline-double bg-amber-200 rounded-sm hover:font-bold"
            onClick={handleDeleteAll}
          >
            Delete All
          </button>
        </>
      </ul>
    </div>
  );
};
