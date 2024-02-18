import React, { useState } from "react";

const data = [
  { id: 1, content: "Content 1" },
  { id: 2, content: "Content 2" },
  { id: 3, content: "Content 3" },
  { id: 4, content: "Content 4" },
];

const Box = () => {
  const [selectedRow, setSelectedRow] = useState(data[0].id);

  const handleRowClick = (id) => {
    setSelectedRow(id);
  };

  return (
    <div className="flex">
      <div className="w-1/2 bg-gray-100 p-4">
        <h2 className="text-lg font-semibold mb-2">Select a row:</h2>
        <ul>
          {data.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer mb-2 ${
                selectedRow === item.id ? "text-lg font-bold" : ""
              }`}
              onClick={() => handleRowClick(item.id)}
            >
              {item.id}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2 bg-gray-200 p-4">
        <h2 className="text-lg font-semibold mb-2">Selected Row Content:</h2>
        <p>
          {selectedRow
            ? data.find((item) => item.id === selectedRow).content
            : "No row selected"}
        </p>
      </div>
    </div>
  );
};

export default Box;
