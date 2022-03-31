import React from "react";
import "./homepage.css";
import { Category,Footer } from "../../components";

export function HomePage() {
  return (
    <div>
      <div className="banner">
        <div className="banner-text">
          <div>Learn Computer Science</div>
          <button className="btn watch-btn">Watch Now</button>
        </div>
      </div>
      <Category />
      <Footer />
    </div>
  );
}
