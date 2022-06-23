import Task from "./components/Task/Task";

import "antd/dist/antd.css";
import { Pagination } from "antd";

import "./App.css";
import { useEffect, useState } from "react";
import Head from "./components/Task/Head";

function App({ tasks }) {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const lastTaskIdx = page * rowsPerPage;
  const firstTaskIdx = lastTaskIdx - rowsPerPage;

  const currentTasks = tasks.slice(firstTaskIdx, lastTaskIdx);

  const handleChange = (page, pageSize) => {
    setPage(page);
    setRowsPerPage(pageSize);
  };
  useEffect(() => {
    console.log("page: ", page, "rowsPerPage: ", rowsPerPage);
  }, [page, rowsPerPage]);

  const head = ["Номер/Дата", "Тип задания/Автор", "Аккаунт/Терминал", "Статус"]
  return (
    <div className="App">
      <div className="paginator">
        <Pagination
          total={tasks.length}
          showSizeChanger
          showQuickJumper
          showTotal={(total) => `Всего заданий: ${total}`}
          onChange={handleChange}
        />
      </div>

      <Head head={head} />

      {currentTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default App;
