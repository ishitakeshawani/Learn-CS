import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import "./navbar.css";

export function Navbar() {
  const navigate = useNavigate();
  const [isMenuShow, setIsMenuShow] = useState(false);
  const { isLoggedIn, logOut } = useAuth();
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
        <Link to="/likedvideos" className="link-no-style nav-link hide-icon">
          LikedVideos
        </Link>
        <Link to="/watchlater" className="link-no-style nav-link hide-icon">
          WatchLater
        </Link>
        <Link to="/playlists" className="link-no-style nav-link hide-icon">
          Playlists
        </Link>
        <Link to="/history" className="link-no-style nav-link hide-icon">
          History
        </Link>
        <Link
          to={isLoggedIn === false && "/login"}
          onClick={() => {
            isLoggedIn ? logOut() : navigate("/login");
          }}
          className="link-no-style nav-link"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </Link>
        <div className="closeMenu">
          <i className="fa fa-times" onClick={closeMenu}></i>
        </div>
      </div>
    </nav>
  );
}
