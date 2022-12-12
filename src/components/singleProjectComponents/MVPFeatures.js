import React from "react";

const MVPFeatures = ({ features }) => {
  const { header, featureList } = features;
  return (
    <section className="mvp-features project-section-margin-bottom">
      <h2 className="tertiary-header">{header}</h2>
      <ul className="mvp-features-list">
        {featureList.map((feature, index) => {
          return (
            <li className="mvp-features-list-item" key={index}>
              - {feature}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MVPFeatures;
