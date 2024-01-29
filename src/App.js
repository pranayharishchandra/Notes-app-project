import React, { useState } from "react";
import Tasks from "./Components/TasksList";
import Header from "./Components/Header";

const App = () => {
  const [dark, setDark] = useState(true)
  function darkMode() {
    setDark((prev) => !prev)
  }

  return (
    <div className={"h-screen " + (dark && 'bg-blue-950')}>
      <Header darkMode={darkMode} dark={dark}/>
      <Tasks dark={dark}/>
    </div>
  )
}

export default App;