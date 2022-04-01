import React from "react";
import { SideBar } from "../../components";
import { categories } from "../../backend/db/categories";
import "./explore.css";
import { products } from "../../backend/db/products";

export function Explore() {
  return (
    <div className="explore-page">
      <SideBar />
      <div className="video-section">
      <div className="category-filter-list">
      <div className="category-item">All</div>
      {categories.map((category) => (
        <div className="category-item">{category.categoryName}</div>
      ))}
      </div>
      <div className="video-list-section">
        {
          products.map((product) =>(
            <div>{product.title}</div>
          ))
        }
      </div>
      </div>
    </div>
  );
}
