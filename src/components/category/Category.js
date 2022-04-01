import React from "react";
import { categories } from "../../backend/db/categories";
import "./category.css";


export function Category() {
  return (
    <div className="categories">
      <div className="category-title">Categories</div>
      <div className="category-list">
        {categories.map((category) => (
          <div className="card">
            <div className="card-section regular-font-weight" id="card-section">
              <img
                className="card-img"
                src={category.image}
                alt="category"
              />
              <div className="card-text-overlay">
                <div className="card-header-title category-style bold-font-weight">
                  {" "}
                  {category.categoryName}{" "}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
