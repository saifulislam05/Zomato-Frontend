import React, { useState } from "react";
import RatingNumberBox from "./RatingNumberBox";
import { BiLike, BiSolidLike} from "react-icons/bi";



const UserReviewedCard = ({ data }) => {
  const {
    imgSrc,
    title,
    address,
    reviews,
    followers,
    stars,
    days,
    votes,
    comments,
    userImg,
  } = data;
  const [liked, setLiked] = useState(false);
  const [toggleCommentBox, setToggleCommentBox] = useState(false);
  const [following, setFollowing] = useState(false);

  return (
    <div className="w-full  my-4 p-4 border-b border-gray-300">
      <div className="flex mb-4">
        <img src={imgSrc} alt="hotel" className="w-10 h-10 rounded-full mr-4" />
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-gray-600">
            {reviews} Reviews · {followers} Followers
          </div>
        </div>
        {/* Example for following button */}
        <button
          onClick={() => setFollowing(!following)}
          className={`ml-auto px-4 py-1 rounded  ${
            following
              ? "bg-red-500 text-white "
              : "bg-white border border-gray-300 text-gray-600"
          }`}
        >
          {following ? "Following" : "Follow"}
        </button>
      </div>

      {/* Star rating and votes/comments */}
      <div className="flex items-center justify-between mb-4">
        {/* <RatingNumberBox stars={stars} txt={`${stars} Stars`} /> */}
        <RatingNumberBox
         
          stars={stars}
          txt={stars}
          iconR={false}
          isActive={true}

        />
        <div>
          {votes} Votes · {comments} Comments
        </div>
      </div>

      {/* Example of like and comment action */}
      <div className="flex">
        <button
          onClick={() => setLiked(!liked)}
          className="flex items-center mr-4 gap-1"
        >
          {liked ? <BiSolidLike size={24} /> : <BiLike size={24} />}
          Helpful
        </button>
        <button
          onClick={() => setToggleCommentBox(!toggleCommentBox)}
          className="flex items-center"
        >
          {/* <img src={commentImg} alt="comment" className="w-6 h-6 mr-2" /> */}
          Comment
        </button>
      </div>

      {/* Comment box */}
      {toggleCommentBox && (
        <div className="mt-4 flex">
          {/* <img src={userImg} alt="User" className="w-8 h-8 rounded-full mr-4" /> */}
          <input
            type="text"
            placeholder="Write your comment"
            className="flex-1 px-4 py-2 border border-gray-300 rounded"
          />
        </div>
      )}
    </div>
  );
};

export default UserReviewedCard;
