import uniqid from "uniqid"

import "./Task.css";

const Head = ({ head }) => {
  return (
    <div className="content">
      <div className="content__grid">
        {head.map((h) => (
          <div key={uniqid()}>
            <div  className="grid__item">
              <div className="grid__item__text header__text">{h}</div>
            </div>
          </ div>
        ))}
      </div>
    </div>
  );
};

export default Head;
