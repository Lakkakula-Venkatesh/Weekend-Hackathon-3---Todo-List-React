import React from "react";

export default function EditBox({ editItem, handleEditChange, saveEditToDo }) {
  return (
    <>
      <input type="string" onChange={handleEditChange} />
      <button
        style={{ marginLeft: "5px" }}
        value={editItem}
        onClick={saveEditToDo}
      >
        Save
      </button>
    </>
  );
}
