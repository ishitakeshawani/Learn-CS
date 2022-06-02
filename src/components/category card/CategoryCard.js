import React from "react";
import { useNavigate } from "react-router-dom";
import { useVideo } from "../../contexts";

export function CategoryCard({ category }) {
  const navigate = useNavigate();
  const { videoDispatch } = useVideo();
  return (
    <div
      className="card"
      onClick={() => {
        videoDispatch({
          type: "SET_SELECTED_CATEGORY",
          payload: category.categoryName,
        });
        navigate("/explore")
      }}
    >
      <div className="card-section regular-font-weight" id="card-section">
        <img className="card-img" src={category.image} alt="category" />
        <div className="card-text-overlay">
          <div className="card-header-title bold-font-weight category-style ">
            {category.categoryName}
          </div>
        </div>
      </div>
    </div>
  );
}
