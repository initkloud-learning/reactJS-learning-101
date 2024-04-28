import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Message",
      completed: false,
    },
  ],
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  addTodo: (todo) => {},
  toggleCompleted: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
