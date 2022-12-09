import { useEffect } from "react";
import BigLogo from "../assets/logo/big-logo-white.svg";
import SmallLogo from "../assets/logo/small-logo-white.svg";
import { FaChevronUp } from "react-icons/fa";
import { useGlobalContext } from "../context";
const Footer = () => {
  const { screenSize, checkSize, backToTop } = useGlobalContext();

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [checkSize]);

  return (
    <footer className="footer">
      <div className="footer-center">
        <img
          src={screenSize < 1024 ? SmallLogo : BigLogo}
          alt="Michael S. Payne II"
        />
        <button className="back-top-link" onClick={backToTop}>
          Back to top
          <FaChevronUp className="footer-icon" />
        </button>

        <p className="footer-copy">Coded in React, 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
