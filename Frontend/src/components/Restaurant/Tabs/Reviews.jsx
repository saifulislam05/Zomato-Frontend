import React from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";;
import Dropdown from "./DropDown";
import UserReviewedCard from "./UserReviewCard";
import UserExperienceCard from "./UserExperienceCard";

const Reviews = () => {
  let data = [
    {
      imgSrc: "https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
      title: "Paradise Biryani",
      address: "Kukatpally, Hyd",
      reviews: 0,
      followers: 0,
      stars: 3,
      days: 10,
      votes: 10,
      comments: 2,
      id: 123,
      userImg: "https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
      userId: 11,
    },
    {
      imgSrc: "https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
      title: "Paradise Biryani",
      address: "Kukatpally, Hyd",
      reviews: 0,
      followers: 0,
      stars: 3,
      days: 10,
      votes: 10,
      comments: 2,
      id: 123,
      userImg: "https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
      userId: 11,
    },
  ];

  const options1 = [
    "All Reviews",
    "Following",
    "Popular",
    "Bloggers",
    "My Reviews",
    "Order Reviews",
  ];

  const options2 = [
    "Newest First",
    "Oldest First",
    "Highest Rated",
    "Lowest Rated",
  ];

  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap md:flex-nowrap gap-8 justify-between">
        <div className="w-full md:w-8/12">
          <div className="flex flex-wrap justify-between">
            <Dropdown
              options={options1}
              icon2={<IoMdArrowDropdown />}
              filFunc={(val) => console.log(val)}
            />
            <Dropdown
              options={options2}
              icon1={<IoMenu />}
              icon2={<IoMdArrowDropdown />}
              filFunc={(val) => console.log(val)}
            />
          </div>
          <div className="flex flex-col justify-between ">
            {data?.map((item, id) => (
              <UserReviewedCard key={id} data={item} />
            ))}
          </div>
        </div>
        <div className="w-full md:w-3/12 mt-10 md:mt-0">
          <UserExperienceCard />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
