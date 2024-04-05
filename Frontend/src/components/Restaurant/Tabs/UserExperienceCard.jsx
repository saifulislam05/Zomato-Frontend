import { useState } from "react";
import { Formik, Form } from "formik";
import RatingNumberBox from "./RatingNumberBox";



const UserExperienceCard = () => {
  const [stars, setStars] = useState(0);
  const quots = ["", "Horrible", "Bad", "Average", "Good", "Excellent"];

  const initialValues = {
    type: "dining",
  };

  return (
    <div className="min-w-[300px] max-w-[350px] min-h-[150px] max-h-[200px] my-2 rounded border border-gray-300 shadow-md">
      <div className="p-4">
        <div className="text-lg font-normal text-gray-900 mb-4">
          Rate your experience for
        </div>
        <div>
          {/* <Formik initialValues={initialValues}>
            <Form className="flex flex-wrap ml-[-18px] my-2">
              <RadioBtn label="Dining" name="type" value="dining" />
              <RadioBtn label="Delivery" name="type" value="delivery" />
            </Form>
          </Formik> */}
        </div>
        <div className="flex items-center mb-2">
          {[1, 2, 3, 4, 5].map((number) => (
            <RatingNumberBox
              key={number}
              stars={stars}
              txt={String(number)}
              iconR={stars > number}
              isActive={stars >= number}
              onClick={() => setStars(number)}
            />
          ))}
          <div className="ml-2 text-base text-gray-600">{quots[stars]}</div>
        </div>
        <div className="text-red-500 cursor-pointer">Write a Review</div>
      </div>
    </div>
  );
};

export default UserExperienceCard;
