import React from "react";
import { useGlobalContext } from "../../context";
import SEO from "../../components/SEO";

import DevProjDetails from "../../components/singleProjectComponents/DevProjDetails";
import MVPFeatures from "../../components/singleProjectComponents/MVPFeatures";
import "../../css/project.css";

import EightBallFortuneMainImg from "../../assets/EightBallFortune/eightball_fortune_main_img.png";
import EightBallAnimationGif from "../../assets/EightBallFortune/eightball_animation.gif";
import EightBallFortuneResponsiveGif from "../../assets/EightBallFortune/eightball_responsive.gif";

import TabletPreview1 from "../../assets/EightBallFortune/tablet_preview1.png";
import TabletPreview2 from "../../assets/EightBallFortune/tablet_preview2.png";
import TabletPreview3 from "../../assets/EightBallFortune/tablet_preview3.png";
import TabletPreview4 from "../../assets/EightBallFortune/tablet_preview4.png";
import TabletPreview5 from "../../assets/EightBallFortune/tablet_preview5.png";
import TabletPreview6 from "../../assets/EightBallFortune/tablet_preview6.png";

import Collaborate from "../../components/Collaborate";

const EightBallFortune = () => {
  const { findProjectInfo } = useGlobalContext();

  let project = findProjectInfo("dev", "/eightball-fortune");

  const { title, client, tech, classification, site, github, tldr, features } =
    project;

  const tabletPreviewList = [
    TabletPreview1,
    TabletPreview2,
    TabletPreview3,
    TabletPreview4,
    TabletPreview5,
    TabletPreview6,
  ];

  return (
    <main>
      <SEO
        title="8-Ball Fortune Teller | Web Development Projects Collection | Michael S. Payne II Portfolio"
        description="Project: My Bright Paths Foundation Capstone project. A digital version of the Magic Eightball produced by Mattel"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <div className="main-project-img-container">
        <img src={EightBallFortuneMainImg} alt="" className="project-img" />
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
          <p className="pos-margin-bottom-2">{tldr.body1}</p>
          <p>{tldr.body2}</p>
        </section>
        <MVPFeatures features={features} />

        <section>
          {/* <h2 className="tertiary-header">Static Preview</h2> */}
          <figure className="project-img-container pos-margin-bottom-4">
            <img
              src={EightBallAnimationGif}
              alt="Eightball animation before displaying an answer"
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              Eightball animation before displaying an answer
            </figcaption>
          </figure>
          <figure className="project-img-container ">
            <img
              src={EightBallFortuneResponsiveGif}
              alt="Responsive layout design: mobile to desktop screens"
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              Responsive layout design: mobile to desktop screens
            </figcaption>
          </figure>
        </section>

        <section className="full-screen">
          <h2 className="tertiary-header">Tablet preview</h2>
          <div className="content-section-preview">
            {tabletPreviewList.map((image, index) => {
              return (
                <img
                  src={image}
                  alt=""
                  className="tablet-preview-img"
                  key={index}
                />
              );
            })}
          </div>
        </section>
      </div>

      <Collaborate />
    </main>
  );
};

export default EightBallFortune;
