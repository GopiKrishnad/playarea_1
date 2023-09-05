import React, { useState } from 'react';
import './Table.css'; // Import your CSS file

const Table = ({ data }) => {
  const [sortedData, setSortedData] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortColumn, setSortColumn] = useState('');

  const handleSort = (key) => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    setSortColumn(key);

    const sorted = [...sortedData].sort((a, b) => {
      if (newSortOrder === 'asc') {
        if (typeof a[key] === 'number') {
          return a[key] - b[key];
        } else if (typeof a[key] === 'string') {
          return a[key].localeCompare(b[key]);
        }
      } else {
        if (typeof a[key] === 'number') {
          return b[key] - a[key];
        } else if (typeof a[key] === 'string') {
          return b[key].localeCompare(a[key]);
        }
      }
      return 0;
    });

    setSortedData(sorted);
  };

  const handleFilter = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = data.filter((item) =>
      Object.values(item)
        .join(' ')
        .toLowerCase()
        .includes(term)
    );

    setSortedData(filtered);
  };

  const sortArrow = sortOrder === 'asc' ? '▲' : '▼';

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleFilter}
      />
      <table>
        <thead>
          <tr>
            <th
              onClick={() => handleSort('name')}
              className={`header-cell ${sortColumn === 'name' ? 'sorted' : ''}`}
            >
              Name {sortColumn === 'name' && <span>{sortArrow}</span>}
            </th>
            <th
              onClick={() => handleSort('age')}
              className={`header-cell ${sortColumn === 'age' ? 'sorted' : ''}`}
            >
              Age {sortColumn === 'age' && <span>{sortArrow}</span>}
            </th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              {/* Render other columns here */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;