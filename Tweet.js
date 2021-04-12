import React from "react";
import './App.css'



function Tweet({ name, username, website }) {
    return (
      <div className="tweet">
        <h3>{name}</h3>
        <h5>
          <i>{"@" + username}</i>
        </h5>
        <h5>
          <a href="" target="_blank">
            {" "}
            {"http://" + website}
          </a>
        </h5>
        <a href="#" class="button">
          MORE DETAILS
        </a>
      </div>
    );
  }
  export default Tweet;  