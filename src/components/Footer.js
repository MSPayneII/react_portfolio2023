import { useEffect } from "react";
import BigLogo from "../assets/logo/big-logo-white.svg";
import SmallLogo from "../assets/logo/small-logo-white.svg";
import { FaChevronUp } from "react-icons/fa";
import { useGlobalContext } from "../context";
const Footer = () => {
  const { screenSize, checkSize } = useGlobalContext();

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  const backToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-center">
        <img
          src={screenSize < 1024 ? SmallLogo : BigLogo}
          alt="Michael S. Payne II"
        />
        <a href="" className="back-top-link">
          Back to top
          <FaChevronUp className="footer-icon" onClick={backToTop} />
        </a>

        <p className="footer-copy">Coded in React, 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
