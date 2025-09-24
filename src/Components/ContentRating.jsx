import React, { Component } from "react";
import "./ContentRating.css";

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0, 
      dislikes: 0,
       handleLikes: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
        }));
      },
      handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
        }));
      },
    }
  }
  render() {
    return <div></div>;
  }
}

export default ContentRating;
