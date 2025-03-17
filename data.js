import React, { useState } from "react";

const DataManagement = () => {
  const [data, setData] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ]);
  const [newName, setNewName] = useState("");

  const updateData = (id, newName) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, name: newName } : item
    );
    setData(updatedData);
  };

  const deleteData = (id) => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  };

  const addData = () => {
    if (newName.trim() !== "") {
      const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
      setData([...data, { id: newId, name: newName }]);
      setNewName("");
    }
  };

  return (
    <div>
      <h1>Data Management</h1>
      
      {/* Input field and Submit button */}
      <div>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter name"
        />
        <button onClick={addData}>Submit</button>
      </div>

      {/* Display data */}
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => updateData(item.id, prompt("Enter new name:"))}>
              Update
            </button>
            <button onClick={() => deleteData(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataManagement;
