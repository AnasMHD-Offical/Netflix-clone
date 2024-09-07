import React, { useState, useEffect } from "react";
import Netflix from "./Assets/Netflix.svg";
import Style from "./Navbar.module.css";

function Navbar() {
  const [bg, setBg] = useState(true);
  function handleShow(isScroll) {
    setBg(!isScroll);
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? handleShow(true) : handleShow(false);

      // return window.removeEventListener("scroll");
    });
  });
  const background = `${bg ? "transparent" : "#000000e5"}`;
  return (
    <>
      <nav
        style={{ backgroundColor: ` ${background}` }}
        className={Style.Navbar}
      >
        <div>
          <img className={Style.Logo} src={Netflix} alt="Netflix logo" />
        </div>
        <ul className={Style.nav_list}>
          <li className={Style.nav_link}>Home</li>
          <li className={Style.nav_link}>TV Shows</li>
          <li className={Style.nav_link}>Movies</li>
          <li className={Style.nav_link}>New & Popular</li>
          <li className={Style.nav_link}>My List</li>
          <li className={Style.nav_link}>Browse by Languages</li>
        </ul>
        <div>
          <img
            className={Style.avatar}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Avatar"
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
