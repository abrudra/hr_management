import React from "react";
import { Layout, Menu } from "antd";
import { gettingAllNewsLetter, gettingAllEmployee } from "../../APIList";
import Loading from "../Loader/Loading";
import { NavLink } from "react-router-dom";

const { Sider } = Layout;

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      error: "",
      newsData: [],
      empData: [],
    };
  }

  gettingAllNewsLetter = async () => {
    this.setState({
      isLoading: true,
    });
    try {
      const response = await gettingAllNewsLetter();
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

  gettingAllEmployee = async () => {
    this.setState({
      isLoading: true,
    });
    try {
      const response = await gettingAllEmployee();
      this.setState({
        empData: response,
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
    this.gettingAllEmployee();
  }

  render() {
    const { newsData, error, isLoading, empData } = this.state;
    return (
      <Sider width={200} style={{ background: "#fff" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.SubMenu key="sub1" title="Employee details">
            {isLoading && <Loading />}
            {error ? (
              <div style={{ color: "red", fontWeight: "bold" }}>{error}</div>
            ) : (
              empData.map((item) => (
                <Menu.Item key={item.id}>{item.emp_name}</Menu.Item>
              ))
            )}
          </Menu.SubMenu>
          <Menu.SubMenu key="sub2" title="News update">
            <NavLink to="/hr/addnewnews">
              <Menu.Item key="0">Add new news</Menu.Item>
            </NavLink>
            {isLoading && <Loading />}
            {error ? (
              <div style={{ color: "red", fontWeight: "bold" }}>{error}</div>
            ) : (
              newsData.map((item) => (
                <NavLink to={`/hr/${item.id}`} style={{textDecoration:'none' ,color:"black"}}>
                  <Menu.Item key={item.id}>{item.title}</Menu.Item>
                </NavLink>
              ))
            )}
          </Menu.SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;
