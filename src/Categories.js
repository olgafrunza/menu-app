import React from "react";

const Categories = ({ cat, handleFilter }) => {
  return (
    <div className="btn-container">
      {cat.map((item, index) => (
        <button
          onClick={() => handleFilter(item)}
          key={index}
          type="button"
          className="filter-btn"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories;
