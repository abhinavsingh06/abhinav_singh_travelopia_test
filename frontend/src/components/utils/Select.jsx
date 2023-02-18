import React from 'react';

function Select({name, selectedValue, handleSelectChange}) {

  const options = [
    { value: 0, label: 'India' },
    { value: 1, label: 'Africa' },
    { value: 2, label: 'Europe' }
  ];

  return (
    <div className="col-span-6 sm:col-span-3">
      <label className="block text-sm font-medium text-gray-700">
        Where do you want to go?
      </label>
      <select name={name} value={selectedValue} onChange={handleSelectChange} className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
        <option value="">-- Select an option --</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;