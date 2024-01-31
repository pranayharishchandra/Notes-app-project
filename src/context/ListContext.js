import tasks_ from "../data/Tasks";
import { useState, useEffect, createContext} from "react";

const TaskContext = createContext()

// you may make a seperate jsx component of TaskProvider function
export const TaskProvider = ({children}) => {

    // Function to fetch tasks from local storage
    function fetchTasks() {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    }
  
  
    // useEffect to fetch tasks when the component mounts
    useEffect(() => {
      fetchTasks();
    }, []);

  const [tasks, setTasks] = useState(tasks_)

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
    console.log('addHandler: ',newTask)
    // adding new element
    if (idEdit === '' || idEdit === 0 || !idEdit) {
      const temp = [...tasks, newTask]
      const sortedTasks = temp.sort((a, b) => b.priority - a.priority);
      setTasks(sortedTasks)
      localStorage.setItem('tasks', JSON.stringify(sortedTasks));
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
      localStorage.setItem('tasks', JSON.stringify(sortedTasks));
    } 
  }


  function editTextHandler(id, text, priority) {
    setIdEdit(id)
    setEditText(text)
    setEditPriority(priority)
    console.log('editTextHandler-id, IdEdit: ', idEdit, text, priority)
  }

  const [filterText, setFilterText] = useState('')




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
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContext


