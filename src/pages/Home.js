import React, { useRef } from "react";
import Hero from "../components/Hero";
import AboutImg from "../assets/homescreen/aboutme.svg";
import Collaborate from "../components/Collaborate";
import { useGlobalContext } from "../context";
import { workCategories } from "../utils/lists";
import { Link } from "react-router-dom";

import "../css/list.css";

const Home = () => {
  const { closeSubmenu } = useGlobalContext();

  let workSection = useRef(null);

  return (
    <main onMouseOver={closeSubmenu}>
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
        <div className="about-me-text">
          <h2 className="primary-secondary-header about-me-title">About me</h2>
          <p className="about-me-description">
            I view life as a giant puzzle with individual pieces representing
            different aspects of our lives. One puzzle piece alone may be hard
            to decipher, but a beautiful image emerges when many are connected.
            This mindset carries over to my work.
            <br />
            <br /> I enjoy utilizing research processes to tell captivating
            stories to bring forward positive change. Also, I love the
            development process of configuring code pieces to visualize those
            stories and the message I'm trying to convey.
          </p>
        </div>
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
