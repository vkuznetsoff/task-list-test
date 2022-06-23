import React from "react";
import Badge from "../Badge/Badge";

import "./Task.css";

const CreateName = (obj) => {
  return `${obj.surname} ${obj.name[0]}. ${obj.patronymic[0]}.`;
};

const Task = ({ task }) => {
  return (
    <div className="content">
      <div className="content__grid">
          
        <div className="grid__item item_title">
          <div className="grid__item__head">№{task.id}</div>
          <div className="grid__item__text">{task.created_date}</div>
        </div>
        <div className="grid__item item_task ">
          <div className="grid__item__head">{task.order_type.name}</div>
          <div className="grid__item__text">
            {CreateName(task.created_user)}
          </div>
        </div>
        <div className="grid__item item_info ">
          <div className="grid__item__head nowrap">{task.account.name}</div>
          <div className="grid__item__text nowrap">{task.terminal.name}</div>
        </div>
        <div className="grid__item item_status">
          <div className="grid__item__head"><Badge status={task.status} /> </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
