import React from 'react';

const FormField = ({ id, label, type, required }) => (
  <div>
    <label htmlFor={id} className="block text-gray-700 mb-2">
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={id}
        name={id}
        required={required}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      ></textarea>
    ) : (
      <input
        id={id}
        type={type}
        name={id}
        required={required}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />
    )}
  </div>
);

export default FormField;
