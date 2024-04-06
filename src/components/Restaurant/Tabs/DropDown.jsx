import { useState } from "react";

const Dropdown = ({ options = [], icon1, icon2, filFunc = () => {} }) => {
  const [selected, setSelected] = useState(options?.[0]);
  const [dropDown, setDropdown] = useState(false);

  const clickHandler = (value) => {
    setSelected(value);
    filFunc(value);
    setDropdown(false);
  };

  return (
    <div className="min-w-[100px] w-max max-w-[200px] cursor-pointer my-1 relative">
      <div className="flex items-center p-2 bg-blue-700 text-white rounded">
        {icon1 && icon1}
        <div className="flex-1 text-sm">{selected}</div>
        {icon2 && icon2}
      </div>
      {dropDown && (
        <div className="min-w-[150px] w-max max-w-[200px] absolute top-full mt-1 left-0 z-10 bg-white shadow-md rounded p-1">
          {options?.map((val, id) => (
            <div
              key={id}
              onClick={() => clickHandler(val)}
              className={`p-2 text-base hover:bg-gray-200 ${
                selected === val ? "bg-blue-100" : ""
              }`}
            >
              {val}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
