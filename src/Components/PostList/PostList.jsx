import PostItem from "../PostItem/PostItem";

const PostList = ({posts = [], activeIndex, setActiveIndex}) => {
  const postItems = posts.map((post, i) => (
  <PostItem
  key={i}
  body={post}
  activeIndex={activeIndex}
  setActiveIndex={setActiveIndex}
  index={i}
  />
  ));
  return (<div>{postItems}</div>);
};
export default PostList;