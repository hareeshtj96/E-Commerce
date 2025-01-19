import React from 'react'
import './SortBar.css';

const SortBar = ({ sort, handleSortChange }) => {
  return (
    <div className='sort-box'>
      <h3>Sort By:</h3>
      <select onChange={handleSortChange} value={sort}>
        <option value="">Select</option>
        <option value="price">Price ( Low to High )</option>
        <option value="-price">Price ( High to Low )</option>
        <option value="name">Name ( A to Z )</option>
        <option value="-name">Name ( Z to A )</option>
      </select>
    </div>
  )
}

export default SortBar
