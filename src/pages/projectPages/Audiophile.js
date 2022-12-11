import React from "react";
import { useGlobalContext } from "../../context";
import { SEO } from "../../components/SEO";

import DevProjDetails from "../../components/singleProjectComponents/DevProjDetails";
import MVPFeatures from "../../components/singleProjectComponents/MVPFeatures";
import "../css/project.css";

import AudiophileMainImg from "../assets/Audiophile/audiophile_main_img.png";

import CartGif from "../../assets/Audiophile/audiophile_cart.gif";

import Preview1 from "../../assets/Audiophile/product_purchase_flow.png";
import Preview2 from "../../assets/Audiophile/tablet_preview.png";
import Preview3 from "../../assets/Audiophile/checkout_flow.png";

import Collaborate from "../../components/Collaborate";

const Audiophile = () => {
  const { findProjectInfo } = useGlobalContext();

  let project = findProjectInfo("dev", "/audiophile");

  const {
    title,
    client,
    tech,
    classification,
    site,
    github,
    tldr,
    features,
    cart,
  } = project;

  return (
    <main>
      <SEO
        title="Audiophile E-commerce | Development Projects | Michael S. Payne II Portfolio"
        description=" Project: A multi-page e-commerce website built with a JavaScript-heavy approach"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <div className="main-project-img-container">
        <img src={AudiophileMainImg} alt="" className="project-img" />
      </div>

      <div className="project-content-container">
        <DevProjDetails
          title={title}
          client={client}
          tech={tech}
          classification={classification}
          site={site}
          github={github}
        />
        <section>
          <h2 className="tertiary-header">{tldr.header}</h2>
          <p>{tldr.body}</p>
        </section>
        <MVPFeatures features={features} />

        <section className="neg-margin-top-15">
          <h2 className="tertiary-header">{cart.header}</h2>
          <p className="pos-margin-bottom-4">{cart.body}</p>
          <figure className="project-img-container pos-margin-bottom-4">
            <img
              src={CartGif}
              alt="Checkout functionality display"
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              Checkout functionality display
            </figcaption>
          </figure>
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">Previews</h2>

          <figure className="project-img-container pos-margin-bottom-4">
            <img
              src={Preview1}
              alt="Screens displaying the user flow for purchasing products"
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              Screens displaying the user flow for purchasing products
            </figcaption>
          </figure>
          <figure className="project-img-container pos-margin-bottom-4">
            <img
              src={Preview2}
              alt="Tablet view for a product page. (Desktop is similar)"
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              Tablet view for a product page. (Desktop is similar)
            </figcaption>
          </figure>

          <figure className="project-img-container">
            <img
              src={Preview3}
              alt="Three screens displaying the cart, checkout form, and order confirmation"
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              Screens for the cart, checkout form, and order confirmation
            </figcaption>
          </figure>
        </section>
      </div>

      <Collaborate />
    </main>
  );
};

export default Audiophile;
