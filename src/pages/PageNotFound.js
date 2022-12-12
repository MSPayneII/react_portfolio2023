import React from "react";
import { Link } from "react-router-dom";
import ErrorImg from "../assets/UndrawSvgs/undraw_page_not_found_re_e9o6.svg";

const PageNotFound = () => {
  return (
    <main>
      <section className="error-text">
        <h1 className="primary-secondary-header">This page does not exist</h1>

        <Link to="/" className="site-nav-link">
          Go to the Homepage
        </Link>
      </section>

      <img src={ErrorImg} alt="404 page not found" className="error-img" />
    </main>
  );
};

export default PageNotFound;
