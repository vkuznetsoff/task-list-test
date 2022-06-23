import { Pagination } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "../Task/Head";
import Task from "../Task/Task";
import uniqid from "uniqid";

import "./TablePage.css";
import "antd/dist/antd.css";

const TablePage = ({ tasks }) => {
  const head = [
    "Номер/Дата",
    "Тип задания/Автор",
    "Аккаунт/Терминал",
    "Статус",
  ];

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const lastTaskIdx = page * rowsPerPage;
  const firstTaskIdx = lastTaskIdx - rowsPerPage;

  const currentTasks = tasks.slice(firstTaskIdx, lastTaskIdx);

  const handleChange = (page, pageSize) => {
    setPage(page);
    setRowsPerPage(pageSize);
  };

  return (
    <div className="tablepage">
      <div className="header">СПИСОК ЗАДАЧ</div>
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
        <Link key={uniqid()} to={`/${task.id}`}>
          <div className="taskitem">
            <Task key={task.id} task={task} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TablePage;
