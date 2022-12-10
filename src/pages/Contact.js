import "../css/contact.css";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

import Form from "../components/Form";
import { useGlobalContext } from "../context";
import { useEffect } from "react";

import SEO from "../components/SEO";

const Contact = () => {
  const { closeSubmenu } = useGlobalContext();

  useEffect(() => {
    //scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <main onMouseOver={closeSubmenu}>
      <SEO
        title="Contact me | Michael S. Payne II Portfolio"
        description="Get in touch with me via social media and my contact form"
        name="Michael S. Payne II Portfolio"
        type="article"
      />

      <section className="get-in-touch-text">
        <h1 className="primary-secondary-header">Get in touch</h1>
        <p className="get-in-touch-body">
          In the last couple of years, I obtained a master's in Information
          Science from the University of Michigan and completed Perficient's
          Bright Paths Program, a coding boot camp for Full Stack JavaScript and
          React Development. I'm based in Detroit, Michigan, and am currently
          seeking full-time employment in user experience and web development.
        </p>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/michaelspayneii/"
            className="external-social-link"
          >
            <AiOutlineLinkedin className="social-icon" />
            My LinkedIn
          </a>
          <a
            href="https://github.com/MSPayneII"
            className="external-social-link"
          >
            <AiOutlineGithub className="social-icon" />
            My Github
          </a>
          <a
            href="https://www.frontendmentor.io/profile/MSPayneII"
            className="external-social-link"
          >
            <AiFillInstagram className="social-icon" />
            My Frontend Mentor
          </a>
        </div>
        <div className="divider-line"></div>
      </section>
      <section className="contact-me">
        <h2 className="primary-secondary-header">Contact me</h2>
        <Form />
      </section>
    </main>
  );
};

export default Contact;
