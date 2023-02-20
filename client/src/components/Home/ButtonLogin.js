import { Card, Button } from "antd";
import { NavLink } from "react-router-dom";

const ButtonLogin = () => {
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
          <NavLink to="/login">
            <Button type="dashed">Login</Button>
          </NavLink>
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
    </>
  );
};

export default ButtonLogin;
