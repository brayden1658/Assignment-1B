import React, { Component } from "react";
import {getAllArticles} from "../services/articleservice";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to the SPEED Application!</h2>
        <p>This is the Home Page of the SPEED Application. This is a work in progress!</p>
        <p>{console.log(JSON.stringify(getAllArticles))}</p>
      </div>
    );
  }
}
export default Home;
