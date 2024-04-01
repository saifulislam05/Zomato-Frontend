import React from "react";

const FooterNav = ({ title, navs }) => {
  return (
    <div>
      <h3 className="font-semibold">{title}</h3>
      <ul className="text-sm text-[#696969] mt-1 flex flex-col gap-0.5">
        {navs.map((item, index) => {
          return <li key={index}><a href="#">{item}</a></li>;
        })}
      </ul>
    </div>
  );
};

export default FooterNav;
