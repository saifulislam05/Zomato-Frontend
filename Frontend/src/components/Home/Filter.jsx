import React from "react";
import FilterOption from "./FilterOption";

const Filter = ({filterList}) => {
  return (
    <div className="flex gap-3">
      {filterList.map(filter => {
        return <FilterOption filter={filter} key={filter.id}/>
      })}
     
    </div>
  );
};

export default Filter;
