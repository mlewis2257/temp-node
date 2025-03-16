import React from "react";
import { useState } from "react";

const Input = () => {
  // Keep track input data
  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleOnChange = (e) => {
    const input = e.target.value;
    setUserInput(input);
  };

  const handleSubmit = () => {
    if (!userInput.trim()) return;
    setList((prev) => [...prev, userInput]);
    setUserInput("");
  };

  const clearList = () => {
    setList([]);
  };

  const removeItem = (index) => {
    setList(list.filter((_, i) => i !== index));
  };
  return (
    <div>
      <input
        placeholder="Add Item to Shopping List"
        type="text"
        value={userInput}
        onChange={handleOnChange}
      />
      <button onClick={handleSubmit}>Add +</button>
      <div>
        <ol>
          {list.map((item, index) => (
            <li key={index}>
              {item} <button onClick={() => removeItem(index)}>X</button>
            </li>
          ))}
        </ol>
      </div>
      <button onClick={clearList}>Clear</button>
    </div>
  );
};

export default Input;
