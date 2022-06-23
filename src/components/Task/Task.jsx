import React from "react";

import "./Task.css";

const CreateName = (obj) => {
  return `${obj.surname} ${obj.name[0]}. ${obj.patronymic[0]}.`;
};

const Task = ({ task }) => {
  return (
    <div className="content">
      <div className="content__row">
        <div className="content__item">
          <div className="content__item__head">№{task.id}</div>
          <div className="content__item__text">{task.created_date}</div>
        </div>
        <div className="content__item">
          <div className="content__item__head">{task.order_type.name}</div>
          <div className="content__item__text">
            {CreateName(task.created_user)}
          </div>
        </div>
        <div className="content__item">
          <div className="content__item__head">{task.account.name}</div>
          <div className="content__item__text">{task.terminal.name}</div>
        </div>
        <div className="content__item">
          <div className="content__item__head">{task.status}</div>
        </div>
      </div>
    </div>
  );
};

export default Task;
