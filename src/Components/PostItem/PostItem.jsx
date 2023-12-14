import React, { useState } from "react";
import "./PostItem.css";

const PostItem = ({
  post,
  activeIndex: activeIndex,
  setActiveIndex,
  index,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisLiked, setIsDisliked] = useState(false);

  const handleLike = (e) => {
    setIsLiked(!isLiked);
  };

  const handleDislike = (e) => {
    setIsDisliked(!isDisLiked);
  };

  const handleActive = () => {
    setActiveIndex(index);
  };

  const likeBtnClass = isLiked ? "active-btn" : "";
  const dislikeBtnClass = isDisLiked ? "active-btn" : "";
  const activeClass = index === activeIndex ? "active-post" : "";

  return (
    <div onClick={handleActive} className={`post-item ${activeClass}`}>
      <span>
        <h3>{post.username}</h3>
      </span>
      <span>{post.body}</span>
      <button className={`likeBtnClass ${likeBtnClass}`} onClick={handleLike}>
        Like
      </button>
      <button className={`dislikeBtnClass ${dislikeBtnClass}`} onClick={handleDislike}>
        Dislike
      </button>
    </div>
  );
};

export default PostItem;
