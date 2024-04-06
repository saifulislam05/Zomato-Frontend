import React from "react";

const OfferTrack = (props) => {
  const { txt1, txt2, ...restProps } = props;
  return (
    <div
      className="max-w-max bg-blue-700 text-white py-2 px-2 m-2 cursor-pointer rounded"
      {...restProps}
    >
      <div className="max-w-max text-sm font-semibold">{txt1}</div>
      <div className="text-xs">{txt2}</div>
    </div>
  );
};

export default OfferTrack;
