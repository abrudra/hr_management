import React from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

class AppBar extends React.Component {
  state = {
    current: "home",
  };

  render() {
    return (
      <>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[this.state.current]}
            style={{ lineHeight: "64px"}}
          >
            <h1 style={{  
              marginLeft:'55px',
              marginRight:'50px'
             }}>
              HR Management System
            </h1>
            <Menu.Item key="home">Home</Menu.Item>
          </Menu>
        </Header>
      </>
    );
  }
}

export default AppBar;
