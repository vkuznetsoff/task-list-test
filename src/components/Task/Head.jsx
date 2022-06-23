import React from "react";
import Badge from "../Badge/Badge";

import "./Task.css";

const CreateName = (obj) => {
  return `${obj.surname} ${obj.name[0]}. ${obj.patronymic[0]}.`;
};

const Head = ({ head }) => {
  return (
    <div className="content">
      <div className="content__grid">
        {head.map((h) => (
          <>
            <div className="grid__item">
              <div className="grid__item__text header__text">{h}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Head;
