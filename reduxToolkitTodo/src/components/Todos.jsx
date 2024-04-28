import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <h2 className="mt-6 text-3xl font-bold">Todos</h2>
      <ul className="flex flex-wrap text-center">
        {todos.map((todo) => (
          <li key={todo.id} className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-300 rounded flex p-4 h-full">
              <div className="flex-1 min-w-0">
                <span className="font-medium">{todo.text}</span>
              </div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="items-center text-base font-semibold text-red-900 bg-red-200 px-2.5 py-0.5"
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
