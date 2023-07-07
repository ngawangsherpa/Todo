import React, { useState } from "react";

function TodoList() {
  const [todoItems, setTodoItems] = useState([]);

  const addTodo = (todo) => {
    setTodoItems(todoItems.concat(todo));
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todoItems];
    updatedTodos.splice(index, 1);
    setTodoItems(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const todoInput = e.target.elements.todo;
          addTodo({
            text: todoInput.value,
            completed: false,
          });
          todoInput.value = "";
        }}
      >
        <input type="text" name="todo" placeholder="Enter a new todo" />
        <button type="submit">Add ToDo</button>
      </form>
      <ul>
        {todoItems.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
