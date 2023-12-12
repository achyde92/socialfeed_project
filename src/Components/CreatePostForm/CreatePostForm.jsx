import React from "react";

const CreatePostForm = ({ onNewPost }) => {
  const [post, setPost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { post };
    onNewPost(formData);
  };
  return(<div>PostForm</div>)
  onNewPost(formData);
};

return ( <form onSubmit={handleSubmit} className="flex item">
<h4>Add Movie</h4>
<TextField label="Username:" value={username} onChange={setUsername}/>
<TextField label="Say Something:" value={body} onChange={setBody}/>
<button type="submit">Post!</button>
</form> );

export default CreatePostForm;
