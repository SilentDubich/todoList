import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm} from "./Components/todoForm";
import {TaskType, TodoList} from "./Components/todoList";

function App() {
    const [tasks, setTasks] = useState<Array<TaskType>>([{id: 1, body: 'Hello world !', isCompleted: false}])
    const [idCounter, setIdCounter] = useState(2)
    const addTask = (task: string) => {
        setTasks([...tasks, {id: idCounter, body: task, isCompleted: false}])
        setIdCounter(idCounter + 1)
    }
    const deleteTask = (id: number) => {
        setTasks([...tasks.filter( el => el.id !== id)])
    }
    const setComplete = (id: number, isComplete: boolean) => {
        setTasks(tasks.map(el => el.id === id ? {id: el.id, body: el.body, isCompleted: isComplete} : el))
    }
  return (
    <div>
      <TodoForm addTask={addTask}/>
      <TodoList setComplete={setComplete} deleteTask={deleteTask} list={tasks}/>
    </div>
  );
}

export default App;
