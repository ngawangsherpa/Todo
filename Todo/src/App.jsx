import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./Todolist";

function App() {
  const allTask = [
    {
      task: "Task 1",
      isCompleted: false,
    },
    {
      task: "Task 2",
      isCompleted: false,
    },
    { task: "Task 3", isCompleted: false },
  ];

  return (
    <>
      <TodoList tasks={allTask} />
    </>
  );
}

export default App;
