import React from "react";

const TableRow = ({ data }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data && data.map(rowData => (
        
        <tr key={rowData.id}>
          <td>
            {rowData.name}
          </td>
          <td>
            {rowData.email}
          </td>
          <td>
            {rowData.trips[0].country}
          </td>
          <td>
            {rowData.trips[0].no_of_person}
          </td>
          <td>
            {rowData.trips[0].budget_per_person}
          </td>
        </tr>
      ))}
    </tbody>
  );
};


export default TableRow;