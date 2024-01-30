import React, { useState, useEffect, useContext } from "react";
import TaskCard from "./TaskCard";
import tasks_ from "../data/Tasks";
import Form from "./Form";
import TaskContext from "../context/ListContext";


const Tasks = (props) => {

  const {dark} = props
  const sortedTasks = tasks_.sort((a, b) => b.priority - a.priority)
  const [tasks, setTasks] = useState(sortedTasks)

  const [editText, setEditText] = useState('')
  const [idEdit, setIdEdit] = useState('')
  const [editPriority, setEditPriority] = useState(1)

  useEffect(() => {
    const sortedTasks = tasks.sort((a, b) => b.priority - a.priority);
    setTasks(sortedTasks)
  },[tasks])


  function editTextHandler(id, text, priority) {
    console.log(id)
    setIdEdit(id)
    setEditText(text)
    setEditPriority(priority)
  }

  function addHandler(newTask) {
    // task is the object with id, priority, text
    console.log('addHandler: ',newTask)
    // adding new element
    if (idEdit === '' || idEdit === 0 || !idEdit) {
      const temp = [...tasks, newTask]
      const sortedTasks = temp.sort((a, b) => b.priority - a.priority);
      setTasks(sortedTasks)
    }
    // update
    else {
      const temp = tasks.map( task => {
        if (task.id === newTask.id) return newTask
        return task
      } )

      const sortedTasks = temp.sort((a, b) => b.priority - a.priority);
      setTasks(sortedTasks)

      setIdEdit('')
      setEditText('')
      setEditPriority(1)
    }

  }

  function deleteHandler(id) {
    const new_tasks = tasks.filter(task => id !== task.id)
    setTasks(new_tasks)
  }
  
  const { test } = useContext(TaskContext)

  console.log('test : ',test)

  if (tasks === null || tasks.length === 0)
    return <h2 className="text-center m-5 text-2xl">No Tasks To Do</h2>


  return (
    <div className="flex-row">

      <Form addHandler={addHandler} dark={dark} idEdit={idEdit} editPriority={editPriority} editText={editText}/>

      <div className="flex justify-center item-center m-4">
      <div className="flex-row justify-center items-center w-[80vw] rounded-lg">
        {tasks.map(task => (
          <TaskCard key={task.id} {...task} editTextHandler={editTextHandler} deleteHandler={deleteHandler} editPriority={editPriority} editText={editText}/>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Tasks;
