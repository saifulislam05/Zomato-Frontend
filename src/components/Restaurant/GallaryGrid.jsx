import React from "react";

const GalleryGrid = ({ imageData }) => {
  return (
    <div className="w-ful h-96 grid grid-cols-4 grid-rows-2">
      {imageData.map((image) => {
        return (
          <div
            key={image.id}
            className={`border overflow-hidden cursor-pointer ${image.colSpan} ${image.rowSpan}`}
          >
            <img
              src={`${image.imageUrl}`}
              alt=""
              srcSet=""
              className="w-full h-full object-cover hover:scale-105 duration-300"
            />
          </div>
        );
      })}
    </div>
  );
};

export default GalleryGrid;
