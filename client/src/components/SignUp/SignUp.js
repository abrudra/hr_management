import React, { Component } from "react";
import { Form, Input, Button, Card ,Alert } from "antd";
import "../SignUp/signup.css";
import { NavLink } from "react-router-dom";
import { signUpEmployee } from "../../APIList";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
    };
  }
  onFinish = async (values) => {
    try {
      const data = await signUpEmployee(values);
      console.log(data);
       this.props.history.push("/login");
    } catch (error) {
      this.setState({
        error: error.response.data.message
      });
    }
  };



  render() {
    const { error} = this.state;
    return (
      <div className="sign-up">
        <Form
          name="signup"
          onFinish={this.onFinish}
          layout="vertical"
          label="Sign up"
          initialValues={{ remember: true }}
          style={{ maxWidth: 550, margin: "0 auto" }}
        >
          <Card>
            <h1>Sign Up</h1>
            {error && (
              <Alert
                description={error}
                type="error"
                showIcon
              />
            )}
            <Form.Item
              label="Employee Name"
              name="emp_name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Employee Email"
              name="emp_email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                onClick={() => {
                  this.setState({
                    error: "",
                    showError: false,
                  });
                }}
              />
            </Form.Item>

            <Form.Item
              label="Employee Address"
              name="emp_address"
              rules={[
                { required: true, message: "Please input your address!" },
              ]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item
              label="Employee Contact"
              name="emp_contact"
              rules={[
                {
                  required: true,
                  message: "Please input your contact number!",
                },
                {
                  pattern: /^[0-9]{10}$/,
                  message: "Please enter a valid contact number!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Employee PAN Card"
              name="emp_pancard"
              rules={[
                {
                  required: true,
                  message: "Please input your PAN card number!",
                },
                {
                  pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                  message: "Please enter a valid PAN card number!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="emp_password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <span> Already have an account?</span>
            <br></br>
            <NavLink to="/login">
              <span>Click here to Login..!</span>
            </NavLink>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Sign up
              </Button>
            </Form.Item>
          </Card>
        </Form>
      </div>
    );
  }
}

export default SignUp;
