import React, { useState } from "react";
import accordionData from "../data/accordionData";
import AccordionCard from "./AccordionCard";

const ExploreOptions = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="w-full md:w-10/12 mx-auto my-10">
      <h1 className="text-3xl font-semibold mb-8">Explore options near me</h1>
      <div className="accordion-wrapper flex flex-col gap-3">
        {accordionData.map((section, index) => (
          <AccordionCard
            key={index}
            section={section}
            index={index}
            expandedSection={expandedSection}
            toggleSection={toggleSection}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreOptions;
