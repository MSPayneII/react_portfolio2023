import { useGlobalContext } from "../../context";
import Collaborate from "../../components/Collaborate";
import { SEO } from "../../components/SEO";

import UxProjDetails from "../../components/singleProjectComponents/UxProjDetails";
import BigTicketItems from "../../components/singleProjectComponents/BigTicketItems";

import BannedBooksMainImg from "../../assets/BannedBooks/banned_books_main_img.png";
import homepage2019Img from "../../assets/BannedBooks/bandblandpg.png";

import "../../css/project.css";

const BannedBooks = () => {
  const { findProjectInfo } = useGlobalContext();

  let project = findProjectInfo("ux", "/banned-books");

  const {
    title,
    classification,
    client,
    role,
    time,
    team,
    skills,
    tldr,
    background,
    problem,
    process,
    findings,
    recommendations,
    takeaway,
  } = project;

  return (
    <main>
      <SEO
        title="Banned Books | UX Projects | Michael S. Payne II Portfolio"
        description=" Project: An updated needs and usability assessment analysis of the Banned & Challenged Books website for the American Library Association"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <div className="main-project-img-container">
        <img src={BannedBooksMainImg} alt="" className="project-img" />
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
              src={homepage2019Img}
              alt="The Banned Books website landing page in 2019"
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              The Banned Books website landing page in 2019
            </figcaption>
          </figure>
        </section>
        <section className="neg-margin-top-9 full-screen col-2">
          <h2 className="tertiary-header">{background.header}</h2>
          <p>{background.body1}</p>
          <p>{background.body2}</p>
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{problem.header}</h2>
          <p>{problem.body}</p>
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{process.header}</h2>
          <BigTicketItems items={process.items} />
        </section>
        <section className="full-screen">
          <h2 className="tertiary-header">{findings.header}</h2>
          <ol className="numbered-list">
            {findings.list.map((item, index) => {
              return (
                <li key={index} className="numbered-list-item">
                  {item}
                </li>
              );
            })}
          </ol>
        </section>

        <section className="full-screen">
          <h2 className="tertiary-header">{recommendations.header}</h2>
          <ol className="numbered-list">
            {recommendations.list.map((item, index) => {
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

export default BannedBooks;
