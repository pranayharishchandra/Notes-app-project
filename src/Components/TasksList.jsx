import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import tasks_ from "../data/Tasks";
import Form from "./Form";

const Tasks = () => {


  const [tasks, setTasks] = useState(tasks_)
  const [editText, setEditText] = useState('')
  const [isedit, setIsEdit] = useState(false)

  useEffect(() => {
    // Assuming tasks is your array of objects
    const sortedTasks = tasks.sort((a, b) => b.priority - a.priority);
    setTasks(sortedTasks)
  },[tasks])


  function editTextHandler(id) {

  }

  function addHandler(task) {
    console.log('addHandler: ',task)
    // console.log(tasks)
    setTasks(prevTasks => [...prevTasks, task]);
  }

  function deleteHandler(id) {
    const new_tasks = tasks.filter(task => id !== task.id)
    setTasks(new_tasks)
  }

  if (tasks === null || tasks.length === 0)
    return <h2 className="text-center m-5 text-2xl">No Tasks To Do</h2>

  return (
    <div className="container">
      <Form addHandler={addHandler} />

      <div className="flex justify-center item-center m-4">
      <div className="flex-row justify-center items-center w-[80vw] bg-red-600">
        {tasks.map(task => (
          <TaskCard key={task.id} {...task} editTextHandler={editTextHandler} deleteHandler={deleteHandler} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Tasks;
