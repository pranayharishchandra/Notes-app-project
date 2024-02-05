import React, { useContext } from "react";

import Header from "../Components/Header";
import Tasks from "../Components/TasksList";
import TaskContext from "../context/ListContext";

const FormScreen = () => {
  const { dark } = useContext(TaskContext)
  const background = dark ? 'bg-blue-950' : 'bg-blue-300'
  return (
    <div>
      {/* negative margin to fix bug - short blue screen  */}
      <div className={"min-h-screen mb-[-16px] " + background}>
        <Header />
        <Tasks />
      </div>
    </div>
  )
}
 
export default FormScreen
