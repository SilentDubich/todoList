import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm} from "./Components/todoForm";
import {TaskType, TodoList} from "./Components/todoList";

function App() {
    let storage: any = []
    let id: any = 0
    storage = localStorage.tasks && localStorage.getItem('tasks')
    id = localStorage.id && localStorage.getItem('id')
    if (storage) storage = JSON.parse(storage)
    if (id) id = +id
    const [tasks, setTasks] = useState<Array<TaskType>>(storage)
    const [idCounter, setIdCounter] = useState(id)
    const addTask = (task: string) => {
        setTasks([...tasks, {id: idCounter, body: task, isCompleted: false}])
        setIdCounter(idCounter + 1)
        localStorage.setItem('tasks', JSON.stringify([...tasks, {id: idCounter, body: task, isCompleted: false}]))
        localStorage.setItem('id', (idCounter + 1).toString())
    }
    const deleteTask = (id: number) => {
        setTasks([...tasks.filter( el => el.id !== id)])
        localStorage.setItem('tasks', JSON.stringify([...tasks.filter( el => el.id !== id)]))
    }
    const setComplete = (id: number, isComplete: boolean) => {
        setTasks(tasks.map(el => el.id === id ? {id: el.id, body: el.body, isCompleted: isComplete} : el))
        localStorage.setItem('tasks', JSON.stringify(tasks.map(el => el.id === id ? {id: el.id, body: el.body, isCompleted: isComplete} : el)))
    }
  return (
    <div>
      <TodoForm addTask={addTask}/>
      <TodoList setComplete={setComplete} deleteTask={deleteTask} list={tasks}/>
    </div>
  );
}

export default App;
