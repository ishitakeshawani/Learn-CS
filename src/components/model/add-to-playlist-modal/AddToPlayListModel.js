import React from "react";
import "./addtoplaylistmodel.css";

export function AddToPlayListModel({ setShowModal }) {
  return (
    <div className="add-playlist-model">
      <div className="add-playlist-model-content">
        <div className="add-playlist-model-header">
          <div className="add-playlist-model-header-name">Save to</div>
          <i class="fas fa-times model-cancel-btn" onClick={() => setShowModal(false)}></i>
        </div>
        <div className="add-playlist-model-list">
            <label htmlFor="" className="add-playlist-model-list-item">
              <input type="checkbox" />
              Watch Later
            </label>
            <label htmlFor="" className="add-playlist-model-list-item">
              <input type="checkbox" />
              Watch Later
            </label>
        </div>
      </div>
    </div>
  );
}
