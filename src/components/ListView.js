import React from "react";

export default function ListView({ item, serial, handleDelete, handleEdit }) {
  return (
    <div className="list">
      {serial + 1}. {item}
      <button style={{ margin: "5px" }} onClick={handleEdit}>
        Edit
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
