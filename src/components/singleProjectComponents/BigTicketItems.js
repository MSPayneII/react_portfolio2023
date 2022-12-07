import React from "react";
import "../../css/project.css";

const BigTicketItems = ({ items }) => {
  return (
    <div className="big-ticket-item-section">
      {items.map((item, index) => {
        const { icon, header, body } = item;
        return (
          <article key={index} className="big-ticket-item">
            <img src={icon} alt={`${header} icon`} className="undraw-svgs" />
            <h3 className="quaternary-header">{header}</h3>
            <p className="big-ticket-item-body">{body}</p>
          </article>
        );
      })}
    </div>
  );
};

export default BigTicketItems;
