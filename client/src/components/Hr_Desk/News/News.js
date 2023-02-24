import { Component } from "react";
import Home from "../../Home/Home";
import AddNews from "./AddNews";

class NewsData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: [],
      isLoading: false,
      error: "",
    };
  }

  render() {
    return (
      <div className="employeemain">
        <h2>News</h2>
        <AddNews></AddNews>
        <Home></Home>
      </div>
    );
  }
}

export default NewsData;
