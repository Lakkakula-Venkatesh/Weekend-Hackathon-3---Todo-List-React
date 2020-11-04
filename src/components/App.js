import React from "react";
import "./../styles/App.css";
import ListView from "./ListView";
import EditBox from "./EditBox";

export default function App() {
  const [newItem, setNewItem] = React.useState("");
  const [editIndex, setEditIndex] = React.useState("-1");
  const [editItem, setEditItem] = React.useState("");
  const [list, setList] = React.useState([]);
  const addToDo = () => {
    let newToDo = newItem;
    if (newToDo === "") {
      return;
    }
    if (list.includes(newToDo)) {
      return;
    }
    let newList = [...list, newToDo];
    setList(newList);
    setNewItem("");
  };
  const handleChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleDelete = (index) => {
    let listToUpdate = [...list];
    listToUpdate.splice(index, 1);
    setList(listToUpdate);
  };
  const handleEditChange = (event) => {
    setEditItem(event.target.value);
    console.log(editItem);
  };
  const saveEditToDo = () => {
    let listToEdit = [...list];
    console.log(listToEdit);
    listToEdit[editIndex] = newItem;
    setList(listToEdit);
    setEditIndex(-1);
  };
  const handleEdit = (index) => {
    let newRender = (
      <EditBox
        editItem={editItem}
        handleEditChange={handleChange}
        saveEditToDo={saveEditToDo}
        value={editItem}
      />
    );
    let listToRender = [...list];
    setEditIndex(index);
    listToRender[index] = newRender;
    setList(listToRender);
    console.log(listToRender);
  };
  return (
    <div id="main">
      <input type="string" id="task" onChange={handleChange} value={newItem} />
      <button style={{ margin: "5px" }} id="btn" onClick={addToDo}>
        Add
      </button>
      <br />
      {list.map((item, index) => (
        <ListView
          item={item}
          key={index}
          serial={index}
          handleDelete={() => handleDelete(index)}
          handleEdit={() => handleEdit(index)}
        />
      ))}
    </div>
  );
}

// https://codesandbox.io/s/suspicious-hermann-wg9dq?file=/src/App.js
