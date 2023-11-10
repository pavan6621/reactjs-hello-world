import React, { useState } from 'react';

function MyComponent() {
  const [tableAData, setTableAData] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    // Existing data in Table A with "name" column
  ]);

  const [tableBData, setTableBData] = useState([
    { id: 101, title: 'Engineer' },
    { id: 102, title: 'Designer' },
    // Existing data in Table B with "title" column
  ]);

  // Combine and transform the data
  const combinedData = tableAData.map((item, index) => ({
    name: item.name,
    title: tableBData[index] ? tableBData[index].title : '',
  }));

  return (
    <div>
      <h2>Combined Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {combinedData.map((item, index) => (
            <tr key={index}>
              <td>
                {item.name}
              </td>
              <tr>
                <td>
                  {item.title}
                </td>
              </tr>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyComponent;
