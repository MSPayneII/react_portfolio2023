import { useGlobalContext } from "../../context";
import Collaborate from "../../components/Collaborate";
import { SEO } from "../../components/SEO";

import UxProjDetails from "../../components/singleProjectComponents/UxProjDetails";
import BigTicketItems from "../../components/singleProjectComponents/BigTicketItems";

import AvStatusMainImg from "../../assets/AvStatusSystem/av_status_main_img.png";
import CityLocationImg from "../../assets/AvStatusSystem/city_locations.png";

const AvStatusSystem = () => {
  const { findProjectInfo } = useGlobalContext();

  let project = findProjectInfo("ux", "/av-status-system");

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
    discovery,
    validation,
    pilot,
    implementation,
    assessment,
    findings,
    conclusion,
    challenges,
    takeaway,
  } = project;

  return (
    <main>
      <SEO
        title="AV Status System | UX Projects | Michael S. Payne II Portfolio"
        description=" Project: Established an automated email confirmation system for absentee ballot status updates in four Michigan cities & townships"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <div className="main-project-img-container">
        <img src={AvStatusMainImg} alt="" className="project-img" />
      </div>

      <div className="project-content-container ux-page-col-gap">
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
        <section>
          <figure className="project-img-container ">
            <img
              src={CityLocationImg}
              alt="Map of Michigan showing the location and populations of the four Michigan cities and townships for the project"
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              Map of Michigan showing the location and populations of the four
              Michigan cities and townships for the project
            </figcaption>
          </figure>
        </section>
        <section className="neg-margin-top-4 full-screen col-2">
          <h2 className="tertiary-header">{problem.header}</h2>
          <p>{problem.body}</p>
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{discovery.header}</h2>

          {discovery.items.map((item, index) => {
            return (
              <div key={index}>
                <h4 className="quaternary-header pos-margin-bottom-1">
                  {item.header}
                </h4>
                <p className="pos-margin-bottom-4">{item.body}</p>
              </div>
            );
          })}
        </section>

        <section className="full-screen">
          <h2 className="tertiary-header">{validation.header}</h2>
          <BigTicketItems items={validation.items} />
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{pilot.header}</h2>
          <BigTicketItems items={pilot.items} />
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{implementation.header}</h2>
          <BigTicketItems items={implementation.items} />
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{assessment.header}</h2>
          <BigTicketItems items={assessment.items} />
        </section>

        <section className="full-screen">
          <h2 className="tertiary-header">{findings.header}</h2>

          {findings.items.map((item, index) => {
            return (
              <div key={index}>
                <h4 className="quaternary-header pos-margin-bottom-1">
                  {item.header}
                </h4>
                <p className="pos-margin-bottom-4">{item.body}</p>
              </div>
            );
          })}
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{conclusion.header}</h2>
          <BigTicketItems items={conclusion.items} />
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{challenges.header}</h2>
          <ol className="numbered-list">
            {challenges.list.map((item, index) => {
              return (
                <li key={index} className="numbered-list-item">
                  {item}
                </li>
              );
            })}
          </ol>
        </section>

        <section className="full-screen">
          <h2 className="tertiary-header">{takeaway.header}</h2>
          <p>{takeaway.body}</p>
        </section>
      </div>
      <Collaborate />
    </main>
  );
};

export default AvStatusSystem;
