import React, { Component } from "react";

export default class StoryOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      loaded: false
    };
    this.imageLoaded = this.imageLoaded.bind(this);
    this.imageRef = React.createRef(null);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidUpdate() {
    // console.log(this.state.value);
    if (this.state.value === 100) {
      clearInterval(this.animate);
      this.props.closeOverlay();
    }
  }
  imageLoaded() {
    // console.log("Image loaded!");
    this.setState({ loaded: true });
    this.animate = setInterval(() => {
      this.setState((state) => {
        return { value: state.value + 1 };
      });
    }, 50);
  }
  handleClick(e) {
    if (e.target !== this.imageRef.current) {
      clearInterval(this.animate);
      this.props.closeOverlay();
    }
  }
  render() {
    // console.log(this.props.story);
    return (
      <div className="story-overlay">
        <progress value={this.state.value} max={100}></progress>
        <div className="story-image" onClick={this.handleClick}>
          <img
            src={this.props.story.url}
            alt="story"
            onLoad={this.imageLoaded}
            ref={this.imageRef}
          />
        </div>
      </div>
    );
  }
}
