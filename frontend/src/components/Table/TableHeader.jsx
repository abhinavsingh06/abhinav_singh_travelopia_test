import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th
          className="px-6 py-3 text-sm font-bold leading-4 tracking-wider
        text-left text-bb-gray-600 text-opacity-50 bg-gray-50"
        >
          Name
        </th>
        <th
          className="px-6 py-3 text-sm font-bold leading-4 tracking-wider
        text-left text-bb-gray-600 text-opacity-50 bg-gray-50"
        >
          Email
        </th>
        <th
          className="px-6 py-3 text-sm font-bold leading-4 tracking-wider
        text-left text-bb-gray-600 text-opacity-50 bg-gray-50"
        >
          Where do you want to go?
        </th>
        <th
          className="px-6 py-3 text-sm font-bold leading-4 tracking-wider
        text-left text-bb-gray-600 text-opacity-50 bg-gray-50"
        >
          No of person
        </th>
        <th
          className="px-6 py-3 text-sm font-bold leading-4 tracking-wider
        text-left text-bb-gray-600 text-opacity-50 bg-gray-50"
        >
          Budget per person($)
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;