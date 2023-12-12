import React, { useState } from 'react';

const PostItem = ({post, activeInedex: activeIndex, setActiveIndex, index}) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isDisLiked, setIsDisliked] = useState(false);

    const handleLike = (e) => {
        setIsLiked(!isLiked);
    };

    const handleDislike = (e) => {
        setIsDisliked(!isDisLiked);
    }

    const handleActive = () => {
        setActiveIndex(index)
    };

    const likeBtnClass = isLiked ? "active-btn" : ""
    const dislikeBtnClass = isDisLiked ? "active-btn" : ""
    const activeClass = index === activeIndex ? "active-post" : ""

    return (
         <div onClick={handleActive} className={`post-item ${activeClass}`}>
        <span>{post}</span>
        <button className= {likeBtnClassbtnClass} onClick={handleLike}>Like</button>
        <button className= {dislikeBtnClass} onClick={={handleDislike}}>Dislike</button>
    </div> );
}
 
export default PostItem;