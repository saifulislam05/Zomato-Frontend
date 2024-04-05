import React from "react";
import { Field } from "formik";

const RadioUtil = ({ label, name, value }) => {
  return (
    <div className="my-2">
      <label className="flex items-center cursor-pointer">
        <Field
          className="mr-4 w-4 h-4 cursor-pointer text-red-500"
          type="radio"
          name={name}
          value={value}
        />
        <span className="text-base font-light">{label}</span>
      </label>
    </div>
  );
};

export default RadioUtil;
