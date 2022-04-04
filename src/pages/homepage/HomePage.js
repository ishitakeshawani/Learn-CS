import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import { Category, Footer } from "../../components";

export function HomePage() {
  return (
    <div>
      <div className="banner">
        <div className="banner-text">
          <div>Learn Computer Science</div>
          <Link to="/explore">
            <button className="btn watch-btn">Watch Now</button>
          </Link>
        </div>
      </div>
      <Category />
      <Footer />
    </div>
  );
}
