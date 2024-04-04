import React from 'react'

const FilterOption = ({filter}) => {
  return (
    <div className="border rounded-lg p-1.5 px-3 text-[#a1a1a1] border-[#a1a1a1] font-light flex justify-center items-center gap-2 cursor-pointer">
      {filter.icon && filter.icon}
      <span className=''>{ filter.title}</span>
    </div>
  );
}

export default FilterOption