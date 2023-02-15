import React from "react";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

const { Header } = Layout;

class AppBar extends React.Component {

  render() {
    return (
      <>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: "55px" }}
          >
            <h1
              style={{
                marginLeft: "55px",
                marginRight: "50px",
              }}
            >
              HR Management System
            </h1>
            <NavLink to="/" style={{color:"wheat"}}>
              <Menu.Item key="home">Home</Menu.Item>
            </NavLink>
          </Menu>
        </Header>
      </>
    );
  }
}

export default AppBar;
