const Post = ({post, onLike, onDislike}) => {
    return ( 
    <div className="post-container">
        <h3 className="username">{post.user}</h3>
        <div className="post-body">{post.body}</div>
        <div className="post-actions">
            <button onClick={() => onLike(post.id)}>Like</button>
            <span>{post.likes}Likes</span>
            <button onClick={() => onDislike(post.id)}>Dislike</button>
            <span>{post.dislikes}Dislikes</span>
        </div>
    </div> );
}
 
export default Post;