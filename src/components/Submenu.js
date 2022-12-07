import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context";
import { NavLink } from "react-router-dom";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { links },
    updateCategory,
  } = useGlobalContext();

  const [columns, setColumns] = useState("col-1");

  const container = useRef(null);
  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { url, label, category } = link;
          return (
            <NavLink
              to={url}
              className={({ isActive }) => {
                return isActive ? "link active" : "link";
              }}
              key={index}
              onClick={() => updateCategory(category)}
            >
              {label}
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
