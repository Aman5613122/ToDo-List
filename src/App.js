import React, { useState } from "react";
import ToDoList from "./ToDoList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

const App = () => {
  const [item, setItem] = useState("");
  const [arrItem, setArray] = useState([]);

  const itemList = (eve) => {
    setItem(eve.target.value);
  };

  const saveItem = () => {
    if (item === "") {
      return;
    }
    setArray((oldData) => {
      return [...oldData, item];
    });
    setItem("");
  };

  const deleteItems = (id) => {
    setArray((oldData) => {
      return oldData.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <br />
        <div className="main">
          <h1>ToDo List</h1>
        </div>
        <input
          type="text"
          placeholder="Add an Items"
          value={item}
          onChange={itemList}
        />
        <button onClick={saveItem}>+</button>
        <ol>
          {arrItem.map((itemval, indi) => {
            return (
              <ToDoList
                key={indi}
                id={indi}
                onSelect={deleteItems}
                text={itemval}
              />
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default App;
