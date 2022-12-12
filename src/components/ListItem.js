import { useEffect } from "react";
import { useGlobalContext } from "../context";

const ListItem = ({ img, alt, title, client, tech, desc }) => {
  const { screenSize, checkSize } = useGlobalContext();

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [checkSize]);

  return (
    <article className="list-item">
      <img src={img} alt={alt} className="list-item-img" />

      <div className="list-item-text">
        <div className="divider-line"></div>
        <div className="list-details">
          <h2 className="tertiary-header">{title}</h2>
          {client ? <h3 className="quaternary-header ">{client}</h3> : null}
          {tech ? <h3 className="quaternary-header ">{tech}</h3> : null}

          <p className="list-item-body">
            {screenSize > 768 && screenSize < 875
              ? `${desc.substring(0, 90)} ...`
              : desc}
          </p>
        </div>
        <div className="divider-line"></div>
      </div>
    </article>
  );
};

export default ListItem;
