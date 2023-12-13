import "./App.css";
import Header from "./Components/Header/Header";
import PostList from "./Components/PostList/PostList";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm"
import React, { useState } from 'react';


function App() {
  const [posts, setPosts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleNewPost = (newPost) => {
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
  }


  return (
    <div className="App">
      <Header />
      <CreatePostForm onNewPost={handleNewPost}/>
      <PostList posts={posts} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
}

export default App;
