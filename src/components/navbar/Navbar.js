import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export function Navbar() {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const showMenu = () => {
    setIsMenuShow(true);
  };
  const closeMenu = () => {
    setIsMenuShow(false);
  };
  return (
    <nav className="navbar semibold-font-weight">
      <div className="openMenu">
        <i className="fa fa-bars" onClick={showMenu}></i>
      </div>
      <Link className="nav-icon-link nav-link link-no-style hide" to="/">
        &lt;Learn CS /&gt;
      </Link>

      <Link className="nav-link link-no-style nav-home" to="/">
        Home
      </Link>
      <Link className="nav-link link-no-style nav-products" to="/explore">
        Explore
      </Link>

      <div className={isMenuShow ? "mainMenuShow" : "mainMenu"}>
        <Link to="/watchlater" className="link-no-style nav-link hide-icon">
          WatchLater
        </Link>
        <Link to="/playlists" className="link-no-style nav-link hide-icon">
          Playlists
        </Link>
        <Link to="/history" className="link-no-style nav-link hide-icon">
          History
        </Link>
        <Link to="/login" className="link-no-style nav-link">
          Login
        </Link>
        <div className="closeMenu">
          <i className="fa fa-times" onClick={closeMenu}></i>
        </div>
      </div>
    </nav>
  );
}
