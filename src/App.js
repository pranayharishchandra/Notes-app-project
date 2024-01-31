import { TaskProvider } from "./context/ListContext";
import FormScreen from "./screen/FormScreen";


const App = () => {

  return (
    <TaskProvider>
      <FormScreen />
    </TaskProvider>
  )
}

export default App; 