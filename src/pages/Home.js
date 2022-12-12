import React, { useRef } from "react";
import Hero from "../components/Hero";
import AboutImg from "../assets/homescreen/aboutme.svg";
import Collaborate from "../components/Collaborate";
import { useGlobalContext } from "../context";
import { workCategories } from "../utils/lists";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

import "../css/list.css";

const Home = () => {
  const { closeSubmenu } = useGlobalContext();

  let workSection = useRef(null);

  return (
    <main onMouseOver={closeSubmenu}>
      <SEO
        title="Homepage | Michael S. Payne II Portfolio"
        description="Homepage of my portfolio that gives information about myself and directs visitors to my work collections"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <Hero workSection={workSection} />
      <div className="about-me">
        <div className="polaroid">
          <img
            src={AboutImg}
            alt="Michael looking at affinity diagram"
            className="about-me-img"
          />
          <div className="polaroid-text">
            <p className="quaternary-header">Affinity Diagramming</p>
          </div>
        </div>
        <section className="about-me-text">
          <h2 className="primary-secondary-header about-me-title">About me</h2>
          <p className="about-me-description">
            I view life as a giant puzzle with individual pieces representing
            different aspects of our lives. One puzzle piece alone may be hard
            to decipher, but an image emerges when many are connected. This
            mindset carries over to my work. I enjoy combining research and
            development processes, piecing together information in hopes of
            telling captivating stories to bring forward positive change.
            <br />
            <br />
            In the last couple of years, I obtained a master's in Information
            Science from the University of Michigan and completed Perficient's
            Bright Paths Program, a coding boot camp for Full Stack JavaScript
            and React Development. I'm based in Detroit, Michigan, and am
            currently seeking full-time employment in user experience and web
            development.
          </p>
        </section>
      </div>
      <section className="my-work-section" ref={workSection}>
        <h2 className="primary-secondary-header">My work</h2>
        <div className="list-container">
          {workCategories.map((item) => {
            const { id, img, alt, title, body } = item;
            return (
              <Link to="/ux-projects" key={id} className="link-article">
                <article className="list-item">
                  <img src={img} alt={alt} className="list-item-img" />

                  <div className="list-item-text">
                    <div className="divider-line"></div>
                    <div className="list-details">
                      <h2 className="tertiary-header">{title}</h2>

                      <p className="list-item-body">{body}</p>
                    </div>
                    <div className="divider-line"></div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
      <Collaborate />
    </main>
  );
};

export default Home;
