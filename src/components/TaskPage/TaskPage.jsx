import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { TasksContext } from "../../App";
import Badge from "../Badge/Badge";
import { CreateName } from "../Task/Task";
import "./TaskPage.css";

const Taskpage = () => {
  const tasks = useContext(TasksContext);

  const { id } = useParams();
  const id10 = parseInt(id, 10);

  const f = tasks.find((t) => t.id === id10);

  return (
    <div className="wrapper">
      <div className="header">
        <h1>{`Задание №${id}`} </h1>
        <Link to="/">
          <p>{`<<Назад`}</p>
        </Link>
      </div>
      <div className="content">
        <div className="content__text">{f.created_date}</div>
        <div className="content__text">{f.order_type.name}</div>
        <div className="content__text">{CreateName(f.created_user)}</div>
        <div className="content__text ">{f.account.name}</div>
        <div className="content__text ">{f.terminal.name}</div>

        <div className="content__text">
          <Badge status={f.status} />{" "}
        </div>
      </div>
    </div>
  );
};

export default Taskpage;
