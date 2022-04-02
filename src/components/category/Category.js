import React from "react";
import { categories } from "../../backend/db/categories";
import { CategoryCard } from "../../components";
import "./category.css";

export function Category() {
  return (
    <div className="categories">
      <div className="category-title">Categories</div>
      <div className="category-list">
        {categories.map((category) => (
          <CategoryCard category={category} />
        ))}
      </div>
    </div>
  );
}
