import React from "react";
import { useGlobalContext } from "../../context";
import SEO from "../../components/SEO";

import DevProjDetails from "../../components/singleProjectComponents/DevProjDetails";
import MVPFeatures from "../../components/singleProjectComponents/MVPFeatures";
import "../../css/project.css";

import ConnectFourMainImg from "../../assets/connectFour/connect_four_main_img.png";
import GameBoardDesign from "../../assets/connectFour/game_board_design.png";
import GamePieceGif from "../../assets/connectFour/game_piece_animation.gif";

import MobilePreview1 from "../../assets/connectFour/mobile_preview1.png";
import MobilePreview2 from "../../assets/connectFour/mobile_preview2.png";
import MobilePreview3 from "../../assets/connectFour/mobile_preview3.png";
import MobilePreview4 from "../../assets/connectFour/mobile_preview4.png";
import MobilePreview5 from "../../assets/connectFour/mobile_preview5.png";
import MobilePreview6 from "../../assets/connectFour/mobile_preview6.png";
import MobilePreview7 from "../../assets/connectFour/mobile_preview7.png";
import Collaborate from "../../components/Collaborate";

const ConnectFour = () => {
  const { findProjectInfo } = useGlobalContext();

  let project = findProjectInfo("dev", "/connect-four");

  const {
    title,
    client,
    tech,
    classification,
    site,
    github,
    tldr,
    behavior,
    features,
    highlight1,
    highlight2,
  } = project;

  const mobilePreviewList = [
    MobilePreview1,
    MobilePreview2,
    MobilePreview3,
    MobilePreview4,
    MobilePreview5,
    MobilePreview6,
    MobilePreview7,
  ];

  return (
    <main>
      <SEO
        title="Connect Four | Development Projects | Michael S. Payne II Portfolio"
        description=" Project: A connect four game that allows human player vs. human player gameplay (alternating turns on the same computer)"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <div className="main-project-img-container">
        <img src={ConnectFourMainImg} alt="" className="project-img" />
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
        <section className="neg-margin-top-6">
          <h2 className="tertiary-header">{behavior.header}</h2>
          <p className="pos-margin-bottom-2">{behavior.body1}</p>
          <p className="pos-margin-bottom-2">{behavior.body2}</p>
          <p>{behavior.body3}</p>
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{highlight1.header}</h2>
          <p>{highlight1.body}</p>
        </section>
        <figure className="project-img-container full-screen">
          <img
            src={GameBoardDesign}
            alt="Game board split into three layers"
            className="project-img"
          />
          <figcaption className="project-figure__caption">
            Figma design provided by Frontend Mentor
          </figcaption>
        </figure>
        <section className="content-section-two-cols  reduced-width">
          <div>
            <h2 className="tertiary-header">{highlight2.header}</h2>
            <p>{highlight2.body}</p>
          </div>
          <figure className="project-img-container gif-alignment col-2">
            <img
              src={GamePieceGif}
              alt="Gif showing drop animation when a piece is placed in the board"
              className="project-img gif-size-adjust"
            />
            <figcaption className="project-figure__caption">
              Drop animation when a piece is placed in the board
            </figcaption>
          </figure>
        </section>

        <section className="full-screen">
          <h2 className="tertiary-header">Mobile preview</h2>
          <div className="content-section-preview">
            {mobilePreviewList.map((image, index) => {
              return (
                <img
                  src={image}
                  alt=""
                  className="mobile-preview-img"
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

export default ConnectFour;
