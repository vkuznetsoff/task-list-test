import Task from "./components/Task/Task";
import { TablePagination } from "@mui/material";

import 'antd/dist/antd.css';
import { Pagination } from 'antd';

import "./App.css";
import { useEffect, useState } from "react";

function App({ tasks }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  // let portionCount = Math.ceil(pagesCount / portionSize);
  // let [portionNumber, setPortionNumber] = useState(1);
  // let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  // let rightPortionPageNumber = portionNumber * portionSize;

  const pageCount = Math.ceil(tasks.length / rowsPerPage)
  // const firstTaskIdx = (page - 1) * rowsPerPage;
  // const lastTaskIdx = page * rowsPerPage - 1;

  // const currentTasks = tasks.slice(firstTaskIdx, lastTaskIdx);

  const handleChange = (page, pageSize) => {
    setPage(page);
    setRowsPerPage(pageSize)
  
  }
  // useEffect(() => {
  //   console.log('page: ', page, "rowsPerPage: ", rowsPerPage)
   
  // }, [page, rowsPerPage]);

  return (
    <div className="App">
      {/* <TablePagination
        component="div"
        count={pageCount}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
<Pagination
    total={tasks.length}
    showSizeChanger
    showQuickJumper
    showTotal={(total) => `Всего заданий: ${total}`}  
    onChange={handleChange} 
    on
  />

      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default App;
