import React, { useState } from 'react';

function Table({ data }) {
  const [sortedData, setSortedData] = useState([...data]);

  const sortTable = () => {
    const sorted = [...sortedData].sort((a, b) => a.Name.localeCompare(b.Name));
    setSortedData(sorted);
  };

  return (
    <div>
      <button onClick={sortTable}>Sort Alphabetically by Name</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            {/* Add headers for other columns here */}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>{item.Name}</td>
              <td>{item.Description}</td>
              {/* Add cells for other columns here */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
