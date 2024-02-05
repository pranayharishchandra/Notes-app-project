import tasks_ from "../data/Tasks";
import { useState, useEffect, createContext } from "react";

const TaskContext = createContext()

// you may make a seperate jsx component of TaskProvider function
export const TaskProvider = ({ children }) => {

  // Function to fetch tasks from local storage
  function fetchTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }

  const [dark, setDark] = useState(true)

  function darkMode() {
    setDark((prev) => !prev)
  }


  // useEffect to fetch tasks when the component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  const [tasks, setTasks] = useState([])

  function deleteHandler(id) {
    const newTasks = tasks.filter(task => id !== task.id);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  const [editText, setEditText] = useState('')
  const [idEdit, setIdEdit] = useState('')
  const [editPriority, setEditPriority] = useState(1)

  function addHandler(newTask) {
    // task is the object with id, priority, text
    // adding new element
    if (idEdit === '' || idEdit === 0 || !idEdit) {
      const temp = [...tasks, newTask]
      const sortedTasks = temp.sort((a, b) => b.priority - a.priority);
      setTasks(sortedTasks)
      localStorage.setItem('tasks', JSON.stringify(sortedTasks));
    }
    // update
    else {
      const temp = tasks.map(task => {
        if (task.id === newTask.id) return newTask
        return task
      })

      const sortedTasks = temp.sort((a, b) => b.priority - a.priority);
      setTasks(sortedTasks)

      setIdEdit('')
      setEditText('')
      setEditPriority(1)

      localStorage.setItem('tasks', JSON.stringify(sortedTasks));
    }
  }


  function editTextHandler(id, text, priority) {
    setIdEdit(id)
    setEditText(text)
    setEditPriority(priority)
  }

  const [filterText, setFilterText] = useState('')


  // PAGINATION ======================================================

  const [currPage, setCurrPage]   = useState(1)
  const itemsInAPage = 5
  const totalItems   = tasks.length
  const totalPages   = Math.ceil(totalItems / itemsInAPage)
  // curr page staring and end idx
  
  const endIdx   = currPage * itemsInAPage
  const startIdx = (currPage-1) * itemsInAPage
  
  // const [currTasks, setCurrTasks] = useState(tasks.slice(startIdx, endIdx))
  const currTasks = tasks.slice(startIdx, endIdx)

  // CROUSEL: one at a time ================================================
  const [readMore, setReadMore] = useState(null)


  function readMoreHandler(id) {
    
  }


  return (
    <TaskContext.Provider value={{
      tasks, setTasks,
      deleteHandler,
      addHandler,
      editTextHandler,
      idEdit, setIdEdit,
      editText, setEditText,
      editPriority, setEditPriority,
      filterText, setFilterText,
      dark, setDark,
      darkMode,

      currPage, setCurrPage,
      totalPages,
      currTasks,

      readMore, setReadMore


    }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContext


