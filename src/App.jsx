import { Component } from "react";
import data from "./data";
import StoryOverlay from "./StoryOverlay";
import Story from "./Story";
import "./styles.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      stories: data,
      open: false,
      currentStory: null
    };
    this.openOverlay = this.openOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    this.setCurrentStory = this.setCurrentStory.bind(this);
  }
  openOverlay() {
    this.setState({ open: true });
  }
  closeOverlay() {
    this.setState({ open: false });
  }
  setCurrentStory(id) {
    this.setState({
      currentStory: this.state.stories.find((story) => story.id === id),
      open: true
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.open && (
          <StoryOverlay
            closeOverlay={this.closeOverlay}
            story={this.state.currentStory}
          />
        )}
        {this.state.stories.map((story) => {
          return (
            <Story
              key={story.id}
              setCurrentStory={this.setCurrentStory}
              story={story}
            />
          );
        })}
      </div>
    );
  }
}
