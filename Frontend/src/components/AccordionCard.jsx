import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const AccordionCard = ({ section, index, expandedSection, toggleSection }) => {
  const isOpen = expandedSection === index;

  return (
    <div className="accordion w-full border rounded-xl shadow-md p-5 py-4">
      <div
        className="w-full flex justify-between items-center cursor-pointer"
        onClick={() => toggleSection(index)}
      >
        <p className="text-lg">{section.title}</p>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {isOpen && (
        <ul className="expandable-content mt-2 w-full flex flex-wrap *:w-fit text-gray-500 list-none">
          {section.content.map((item, itemIndex) => (
            <li
              key={itemIndex}
              className={`w-full ${itemIndex === 0 ? "list-none" : ""} flex items-center justify-between`}
            >
              <a href="#">{item}</a>
              {itemIndex < section.content.length - 1 && <div className="w-1 h-1 rounded-full bg-gray-500 mx-2 z-50"></div>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AccordionCard;
