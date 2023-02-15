import React, { Component } from "react";
import { Form, Input, Button, Card, Alert } from "antd";
import "../Login/login.css";
import { NavLink } from "react-router-dom";
import { loginEmployee } from "../../APIList";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
      showError: false,
    };
  }
  onFinish = async (values) => {
    try {
      const data = await loginEmployee(values);
      console.log(data)
    } catch (error) {
      this.setState({
        error: error.response.data.message,
      });
    }
  };

  render() {
    const { error } = this.state;
    return (
      <div className="login-form">
        <Form
          name="login"
          onFinish={this.onFinish}
          layout="vertical"
          initialValues={{ remember: true }}
          style={{ maxWidth: 400, margin: "0 auto" }}
        >
          <Card>
            <h1>Login</h1>
            {error && (
              <Alert
                description={error}
                type="error"
                showIcon
                style={{ marginBottom: 16 }}
              />
            )}
            <Form.Item
              label="Employee Email"
              name="emp_email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                onClick={() => {
                  this.setState({
                    error: "",
                  });
                }}
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="emp_password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                onClick={() => {
                  this.setState({
                    error: "",
                  });
                }}
              />
            </Form.Item>
            <span>New here?</span>
            <br></br>
            <NavLink to="/signup">
              <span>Click here to Sign up..!</span>
            </NavLink>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Log in
              </Button>
            </Form.Item>
          </Card>
        </Form>
      </div>
    );
  }
}

export default Login;
