import * as commentActions from "../../store/comment";
import { useState } from "react";
import { useDispatch } from "react-redux";
function CommentForm({ projectId, storyId }) {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(commentActions.addComment({ storyId, projectId, description }));
    setDescription("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        cols="30"
        rows="2"
      ></textarea>
      <button type="submit">Submit Comment</button>
    </form>
  );
}

export default CommentForm;
