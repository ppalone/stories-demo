export default function Story(props) {
  function setCurrentStory() {
    props.setCurrentStory(props.story.id);
  }
  return (
    <div className="circle" onClick={setCurrentStory}>
      P
    </div>
  );
}
