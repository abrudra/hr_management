import React from "react";
import { Layout, Menu } from "antd";
import EmployeeDetails from "./Employee/Employee";
import NewsData from "./News/News";
import HolidayList from "./Holiday/Holiday";

const { Sider, Content } = Layout;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMenuItem: null,
    };
  }

  handleMenuClick = (e) => {
    this.setState({ selectedMenuItem: e.key });
  };
  componentDidMount() { 
    this.setState({ selectedMenuItem: "employee" });
  }
  signOutHandler = () => {
    localStorage.clear();
    window.location.href = "/login"
  };

  render() {
    return (
      <Layout>
        <Sider>
          <Menu
            onClick={this.handleMenuClick}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["employee"]}
            className="hrmenu"
          >
            <Menu.Item key="employee">Employee Details</Menu.Item>
            <Menu.Item key="news">News Update</Menu.Item>
            <Menu.Item key="holiday">Holiday</Menu.Item>
            <Menu.Item key="signout" onClick={this.signOutHandler}>
              Sign Out
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>
          {this.state.selectedMenuItem === "employee" && <EmployeeDetails />}
          {this.state.selectedMenuItem === "news" && <NewsData />}
          {this.state.selectedMenuItem === "holiday" && <HolidayList/>}
        </Content>
      </Layout>
    );
  }
}

export default Sidebar;
