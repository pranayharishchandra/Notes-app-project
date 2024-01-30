import tasks_ from "../data/Tasks";
import { useState, useEffect, createContext} from "react";

const TaskContext = createContext()

// you may make a seperate jsx component of TaskProvider function
export const TaskProvider = ({children}) => {

  const sortedTasks = tasks_.sort((a, b) => b.priority - a.priority)
  const [tasks, setTasks] = useState(sortedTasks)

  return (
    <TaskContext.Provider value={{
      tasks, setTasks,
      
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContext


