import "./Badge.css";

import React from "react";

const Badge = ({ status }) => {
  const getStatus = (status) => {
    switch (status) {
      case "new":
        return "Новое";

      case "completed":
        return "Завершено";

      case "assigned_to":
        return "Назначено";

      case "started":
        return "Выполняется";

      case "declined":
        return "Отклонено";

      default:
        return "Status";
    }
  };

  const style = {
    background:
      status === "new"
        ? "#82E0AA"
        : status === "completed"
        ? "#5D6D7E"
        : status === "assigned_to"
        ? "#F1C40F"
        : status === "started"
        ? "#3498DB"
        : status === "declined" ? "#EC7063"
        : "none",
  };

  return (
    <div className="badge" style={style}>
      {getStatus(status)}
    </div>
  );
};

export default Badge;
