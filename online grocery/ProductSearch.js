import React, { useState } from 'react';

const ProductSearch = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleFilter = (filter) => {
    onFilter(filter);
  };

  return (
    <div>
      <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <select onChange={(e) => handleFilter(e.target.value)}>
        <option value="category">Category</option>
        {/* Add other filter options */}
      </select>
    </div>
  );
};

export default ProductSearch;
