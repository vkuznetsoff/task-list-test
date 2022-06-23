import { Routes, Route, BrowserRouter } from "react-router-dom";
import Taskpage from "./components/TaskPage/TaskPage";
import TablePage from "./components/TablePage/TablePage";
import { tasks } from "./data/data";

import "./App.css";
import { createContext } from "react";

export const TasksContext = createContext(tasks);

function App() {

  return (
    <TasksContext.Provider value={tasks}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<TablePage tasks={tasks} />}></Route>
            <Route path="/:id" element={<Taskpage />}></Route>
          </Routes>
        </div>
        <div className="footer"></div>
      </BrowserRouter>
    </TasksContext.Provider>
  );
}

export default App;
