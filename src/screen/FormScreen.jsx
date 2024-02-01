import React, { useContext } from "react";

import Header from "../Components/Header";
import Tasks from "../Components/TasksList";
import TaskContext from "../context/ListContext";

const FormScreen = () => {
  const { dark } = useContext(TaskContext)
  const background = dark ? 'bg-blue-950' : 'bg-blue-300'
  return (
    <div>
      <div className={"h-screen " + background}>
        <Header />
        <Tasks />
      </div>
    </div>
  )
}
 
export default FormScreen
