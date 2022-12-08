import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import { NavLink } from "react-router-dom";
import BigLogo from "../assets/logo/big-logo.svg";
import SmallLogo from "../assets/logo/small-logo-black.svg";
import { AiOutlineMenu } from "react-icons/ai";
import "../css/headerNav.css";
import Submenu from "./Submenu";

const HeaderNav = () => {
  const {
    screenSize,
    checkSize,
    openMenu,

    openSubmenu,
    closeSubmenu,
  } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [checkSize]);

  return (
    <header className="header">
      <Submenu />
      <nav className="nav" onMouseOver={handleSubmenu}>
        <div className="nav-center">
          <div className="nav-header">
            <img
              src={screenSize < 1024 ? SmallLogo : BigLogo}
              alt="Michael S. Payne II"
            />
            <button className="action-btn nav-toggle" onClick={openMenu}>
              Menu <AiOutlineMenu className="menu-icon" />
            </button>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? "link active" : "link";
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <button
                className="link link-btn"
                onClick={displaySubmenu}
                onMouseOver={displaySubmenu}
              >
                Work
              </button>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) => {
                  return isActive ? "link active" : "link";
                }}
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-me"
                className={({ isActive }) => {
                  return isActive ? "link active" : "link";
                }}
              >
                Contact me
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderNav;
