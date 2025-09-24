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
    };
  }
  render() {
    return (
      <div className="content-rating">
        <p>
          The two most important days in your life are the day you are born and
          the day you find out why.
        </p>
        <strong>- Mark Twain</strong>
        <div className="rating-button">
          <button className="like-button" onClick={this.state.handleLikes}>
            Like ({this.state.likes})
          </button>
          <button className="like-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
        </div>
      </div>
    );
  }
}

export default ContentRating;
