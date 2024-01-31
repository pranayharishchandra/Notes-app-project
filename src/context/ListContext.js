import tasks_ from "../data/Tasks";
import { useState, useEffect, createContext} from "react";

const TaskContext = createContext()

// you may make a seperate jsx component of TaskProvider function
export const TaskProvider = ({children}) => {

  const sortedTasks = tasks_.sort((a, b) => b.priority - a.priority)
  const [tasks, setTasks] = useState(sortedTasks)

  function deleteHandler(id) {
    const new_tasks = tasks.filter(task => id !== task.id)
    setTasks(new_tasks)
  }

  const [editText, setEditText] = useState('')
  const [idEdit, setIdEdit] = useState('')
  const [editPriority, setEditPriority] = useState(1)

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

  function editTextHandler(id, text, priority) {
    setIdEdit(id)
    setEditText(text)
    setEditPriority(priority)
    console.log('editTextHandler-id, IdEdit: ', idEdit, text, priority)
  }

  useEffect(() => {
    const sortedTasks = tasks.sort((a, b) => b.priority - a.priority);
    setTasks(sortedTasks)
  },[tasks])

  return (
    <TaskContext.Provider value={{
      tasks, setTasks,
      deleteHandler,
      addHandler,
      editTextHandler,
      idEdit, setIdEdit,
      editText, setEditText,
      editPriority, setEditPriority,
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContext


