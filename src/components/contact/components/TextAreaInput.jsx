// TextAreaInput.js
import React from "react";

const TextAreaInput = ({ id, name, label, value, onChange, placeholder, required, error }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows="4"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        placeholder={placeholder}
        required={required}
      ></textarea>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default TextAreaInput;
