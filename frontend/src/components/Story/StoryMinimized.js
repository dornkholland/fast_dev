const StoryMinimized = ({ setIsMax, story }) => {
  const handleMaximize = () => {
    setIsMax(true);
  };
  return (
    <div className="miniStory">
      <div className="miniStory__header">
        <p>{story.name}</p>
        <button onClick={handleMaximize}>max</button>
      </div>
      <div className="miniStory__details">
        <p>{story.storyType}</p>
        <p>size: {story.size}</p>
        <p>status: {story.status}</p>
      </div>
    </div>
  );
};
export default StoryMinimized;
