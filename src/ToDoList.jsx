import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToDoList = (props) => {
  return (
    <>
      <div className="list">
        <p>
          {props.text}
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => {
                props.onSelect(props.id);
              }}
            />
          </span>
        </p>
      </div>
    </>
  );
};

export default ToDoList;
