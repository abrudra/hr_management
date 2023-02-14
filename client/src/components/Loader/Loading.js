import { Component } from "react";
import { Spin } from "antd";

class Loading extends Component {
  render() {
    return <Spin size="large" />;
  }
}

export default Loading;
