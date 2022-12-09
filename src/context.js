import React, { useState, useContext } from "react";
import { subLinks } from "./utils/navLinks";
import { uxProjects, devProjects } from "./utils/lists";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });
  const [category, setCategory] = useState("ux");

  const checkSize = () => {
    setScreenSize(window.innerWidth);
  };

  const openMenu = () => {
    console.log("menu open");
    setIsMenuOpen(true);
  };

  const openSubmenu = (label, coordinates) => {
    const page = subLinks.find((link) => link.page === label);

    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const backToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const updateCategory = (category) => {
    setCategory(category);
  };

  const findProjectInfo = (category, slug) => {
    let project;

    if (category === "ux") {
      project = uxProjects.find((project) => project.slug === slug);
    } else if (category === "dev")
      project = devProjects.find((project) => project.slug === slug);

    return project;
  };

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        openMenu,
        closeMenu,
        backToTop,
        screenSize,
        checkSize,
        page,
        location,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        category,
        updateCategory,
        findProjectInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
