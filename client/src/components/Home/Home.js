import { Component } from "react";
import { Card, Button, Divider } from "antd";
import "./home.css";
import * as API from "../../APIList";
import Loading from "../Loader/Loading";
import { NavLink } from "react-router-dom";

const { Meta } = Card;

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
    console.log(this.state.newsData);
    const { newsData, isLoading, error } = this.state;
    return (
      <>
        <div className="home-login-select">
          <Card
            title="HR Desk"
            bordered={false}
            style={{
              width: 300,
              marginTop: "5rem",
            }}
          >
            <Button type="dashed">Login</Button>
          </Card>
          <Card
            title="Employee Desk"
            bordered={false}
            style={{
              width: 300,
              marginTop: "5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                columnGap: "10%",
              }}
            >
              <NavLink to="/login">
                <Button type="dashed">Login</Button>
              </NavLink>
              <NavLink to="/signup">
                <Button type="dashed">Sign Up</Button>
              </NavLink>
            </div>
          </Card>
        </div>
        <Divider orientation="left">HR Desk updates.!</Divider>
        <div className="hr-news">
          {isLoading && <Loading />}
          {error ? (
            <div style={{ color: "red", fontWeight: "bold" }}>{error}</div>
          ) : (
            newsData.map((item) => {
              return (
                <Card
                  hoverable
                  style={{
                    width: 350,
                  }}
                  cover={<img alt="example" src={item.imageUrl} />}
                >
                  <Meta title={item.title} description={item.description} />
                </Card>
              );
            })
          )}
        </div>
      </>
    );
  }
}

export default Home;
