import React from "react";

export function CategoryCard({category}) {
  return (
    <div className="card">
      <div className="card-section regular-font-weight" id="card-section">
        <img className="card-img" src={category.image} alt="category" />
        <div className="card-text-overlay">
          <div className="card-header-title bold-font-weight">
            {" "}
            {category.categoryName}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
