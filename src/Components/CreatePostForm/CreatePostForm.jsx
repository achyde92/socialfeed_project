import React, { useState } from "react";
import TextField from "../../TextField/TextField";

const CreatePostForm = ({ onNewPost }) => {
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { username, body };
    onNewPost(formData);
    setUsername("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex item">
      <h4>Add Post</h4>
      <TextField label="Username" value={username} onChange={handleUsernameChange} />
      <TextField label="Say Something" value={body} onChange={handleBodyChange} />
      <button type="submit">Post!</button>
    </form>
  );
};
export default CreatePostForm;
