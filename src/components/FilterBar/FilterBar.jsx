import React from "react";
import "./FilterBar.css";

const FilterBar = ({ filters, handleFilter }) => {
  const priceRanges = [
    { label: "0-5000", value: [0, 5000] },
    { label: "5000 - 10000", value: [5000, 10000] },
    { label: "10000 - 50000", value: [10000, 50000] },
    { label: "50000 - 100000", value: [50000, 100000] },
  ];

  const handlePriceChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue) {
      handleFilter({
        target: {
          name: "priceRange",
          value: JSON.parse(selectedValue),
        },
      });
    } else {
      handleFilter({
        target: {
          name: "priceRange",
          value: [],
        },
      });
    }
  };

  return (
    <div className="filter-box">
      <h3>Filter</h3>
      <div className="filter-row">
        <div className="filter-category">
          <label className="filter-label">Category:</label>
          <select
            name="category"
            onChange={handleFilter}
            value={filters.category}
          >
            <option value="">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
          </select>
        </div>

        <div className="filter-price">
          <label className="filter-label">Price:</label>
          <select
            name="priceRange"
            onChange={handlePriceChange}
            value={filters.priceRange.length ? JSON.stringify(filters.priceRange) : ""}
          >
            <option value="">Select</option>
            {priceRanges.map((range, index) => (
              <option key={index} value={JSON.stringify(range.value)}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
