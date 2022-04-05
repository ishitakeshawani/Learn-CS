import React from "react";
import { Link } from "react-router-dom";
import { useVideo } from "../../contexts";

export function CategoryCard({ category }) {
  const { videoDispatch } = useVideo();
  return (
    <div className="card">
      <div className="card-section regular-font-weight" id="card-section">
        <Link
          to="/explore"
          onClick={() =>
            videoDispatch({
              type: "SET_SELECTED_CATEGORY",
              payload: category.categoryName,
            })
          }
        >
          <img className="card-img" src={category.image} alt="category" />
        </Link>
        <div className="card-text-overlay">
          <div className="card-header-title bold-font-weight category-style ">
            {category.categoryName}
          </div>
        </div>
      </div>
    </div>
  );
}
