import tasks_ from "../data/Tasks";
import { useState, useEffect, createContext} from "react";

const TaskContext = createContext()

export const TaskProvider = ({children}) => {
  const [test] = useState('it is working')
  return (
    <TaskContext.Provider value={{
      test
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContext


