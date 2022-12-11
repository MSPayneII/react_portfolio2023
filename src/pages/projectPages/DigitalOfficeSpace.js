import React from "react";
import { useGlobalContext } from "../../context";
import Collaborate from "../../components/Collaborate";
import { SEO } from "../../components/SEO";

import UxProjDetails from "../../components/singleProjectComponents/UxProjDetails";
import DigitalOfficeMainImg from "../../assets/DigitalOfficeSpace/digital_office_main_img.png";
import BigTicketItems from "../../components/singleProjectComponents/BigTicketItems";

const DigitalOfficeSpace = () => {
  const { findProjectInfo } = useGlobalContext();

  let project = findProjectInfo("dev", "/digital-office-space");

  const {
    title,
    classification,
    client,
    role,
    time,
    team,
    skills,
    tldr,
    problem,
    solution,
    agile,
    functionality,
  } = project;
  return (
    <main>
      <SEO
        title="Digital Office Space | Development Projects | Michael S. Payne II Portfolio"
        description=" Project: A UX/development project for the creation of a digital office space for a Detroit-based non-profit community organization"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <div className="main-project-img-container">
        <img src={DigitalOfficeMainImg} alt="" className="project-img" />
      </div>

      <div className="project-content-container">
        <UxProjDetails
          title={title}
          classification={classification}
          client={client}
          role={role}
          time={time}
          team={team}
          skills={skills}
        />
        <section>
          <h2 className="tertiary-header">{tldr.header}</h2>
          <p>{tldr.body}</p>
        </section>

        <section className="neg-margin-top-12 full-screen col-2">
          <h2 className="tertiary-header">{problem.header}</h2>
          <p>{problem.body}</p>
        </section>
        <section className=" full-screen">
          <h2 className="tertiary-header">{solution.header}</h2>
          <p className="pos-margin-bottom-2">{solution.body1}</p>
          <p>{solution.body2}</p>
        </section>
        <section className=" full-screen">
          <h2 className="tertiary-header">{agile.header}</h2>
          <p>{agile.body}</p>
        </section>

        <section className="full-screen">
          <h2 className="tertiary-header">{functionality.header}</h2>

          <BigTicketItems items={functionality.items} />
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">Project summary video</h2>
          <p>
            If you would like to view the video summary the team and I created,
            please check out the video on my Youtube channel at the following
            link:
          </p>
          <div className="project-external-video-link-container">
            <a href="https://youtu.be/z2JOyV84S0g" className="site-nav-link">
              Digital Office Space Youtube Video
            </a>
          </div>
        </section>
      </div>
      <Collaborate />
    </main>
  );
};

export default DigitalOfficeSpace;
