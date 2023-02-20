import { Component } from "react";
import { Divider } from "antd";
import "./home.css";
import * as API from "../../APIList";
import CardNews from "./CardNews";
import Loading from "../Loader/Loading";
import ButtonLogin from "./ButtonLogin";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      newsData: [],
      isLoading: false,
      error: "",
    };
  }

  gettingAllNewsLetter = async () => {
    this.setState({
      isLoading: true,
    });
    try {
      const response = await API.gettingAllNewsLetter();
      this.setState({
        newsData: response,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        error: "Failed while fetching data..!" + error.message,
      });
    }
  };

  componentDidMount() {
    this.gettingAllNewsLetter();
  }
  render() {
    const { newsData, isLoading, error } = this.state;
    return (
      <>
        <ButtonLogin />
        <Divider orientation="left">HR Desk updates.!</Divider>
        <div className="hr-news">
          {isLoading && <Loading />}
          {error ? (
            <div style={{ color: "red", fontWeight: "bold" }}>{error}</div>
          ) : (
            newsData.map((item) => (
              <CardNews
                key={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
              />
            ))
          )}
        </div>
      </>
    );
  }
}

export default Home;
