import { React, useState } from "react";
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
      <a className="nav-icon-link nav-link link-no-style hide-icon" href="/">
        &lt;Learn CS /&gt;
      </a>

      <a className="nav-link link-no-style nav-home" href="/">
        Home
      </a>
      <a
        className="nav-link link-no-style nav-products"
        href="/pages/products/products.html"
      >
        Explore
      </a>

      <div className={isMenuShow ? "mainMenuShow" : "mainMenu"}>
        <a
          href="/pages/Authentication/login/login.html"
          className="link-no-style nav-link"
        >
          Login
        </a>

        <div className="closeMenu">
          <i className="fa fa-times" onClick={closeMenu}></i>
        </div>
      </div>
    </nav>
  );
}
