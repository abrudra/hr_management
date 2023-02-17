import React, { Component } from "react";
import { Form, Input, Button, Card, Alert } from "antd";
import "../SignUp/signup.css";
import { NavLink } from "react-router-dom";
import { signUpEmployee } from "../../APIList";
// import { Checkbox, Divider } from "antd";

// const CheckboxGroup = Checkbox.Group;
// const plainOptions = [
//   "Employment contract",
//   "Employee wages",
//   "Code of Conduct",
//   "Leave policy",
//   "Employee provident fund",
// ];
// const defaultCheckedList = [
//   "Employment contract",
//   "Employee wages",
//   "Code of Conduct",
//   "Leave policy",
// ];

// const plainOptionsInvestment = [
//   "Professional development programs",
//   "Cross-functional training",
//   "Process automation",
//   "A comfortable work atmosphere",
// ];
// const defaultCheckedListInvestment = [
//   "Professional development programs",
//   "Cross-functional training",
// ];


class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      // checkedList: defaultCheckedList,
      // checkAll: false,
      // indeterminate: true,
      // checkedListInvestment: defaultCheckedListInvestment,
      // checkAllInvestment: false,
      // indeterminateInvestment: true,
      error:'',
    };
  }
  onFinish = async (values) => {
    try {
      const data = await signUpEmployee(values);
      console.log(data);
      this.props.history.push("/login");
    } catch (error) {
      this.setState({
        error: error.response.data.message,
      });
    }
  };

  // onChange = (list) => {
  //   this.setState({
  //     checkedList: list,
  //     checkAll: list.length === plainOptions.length,
  //     indeterminate: !!list.length && list.length < plainOptions.length,
  //   });
  // };

  // onCheckAllChange = (e) => {
  //   this.setState({
  //     checkedList: e.target.checked ? plainOptions : [],
  //     checkAll: e.target.checked,
  //     indeterminate: false,
  //   });
  // };

  // onChangeInvestment = (list) => {
  //   this.setState({
  //     checkedListInvestment: list,
  //     checkAllInvestment: list.length === plainOptionsInvestment.length,
  //     indeterminateInvestment:
  //       !!list.length && list.length < plainOptionsInvestment.length,
  //   });
  // };

  // onCheckAllChangeInvestment = (e) => {
  //   this.setState({
  //     checkedListInvestment: e.target.checked ? plainOptionsInvestment : [],
  //     checkAllInvestment: e.target.checked,
  //     indeterminateInvestment: false,
  //   });
  // };

  render() {
    const {
      error,
      // indeterminate,
      // checkAll,
      // checkedList,
      // indeterminateInvestment,
      // checkAllInvestment,
      // checkedListInvestment,
    } = this.state;
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
            {error && <Alert description={error} type="error" showIcon />}
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
            {/* <Form.Item
              label="Employee salary"
              name="salary"
              rules={[
                {
                  required: true,
                  message: "Please input your salary",
                },
                {
                  pattern: /^[0-9]{10}$/,
                  message: "Please enter only number",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Employee pending leaves" name="emp_leaves">
              <Input defaultValue={27} readOnly />
            </Form.Item> */}
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
            {/* <Form.Item>
              <Checkbox
                indeterminate={indeterminate}
                onChange={this.onCheckAllChange}
                checked={checkAll}
                rules={[{ required: true, message: "Please select checkbox." }]}
              >
                Employe policy
              </Checkbox>
              <Divider />
              <CheckboxGroup
                options={plainOptions}
                value={checkedList}
                onChange={this.onChange}
              />
            </Form.Item>
            <Form.Item>
              <Checkbox
                indeterminate={indeterminateInvestment}
                onChange={this.onCheckAllChangeInvestment}
                checked={checkAllInvestment}
                rules={[{ required: true, message: "Please select checkbox." }]}
              >
                Employe investment
              </Checkbox>
              <Divider />
              <CheckboxGroup
                options={plainOptionsInvestment}
                value={checkedListInvestment}
                onChange={this.onChangeInvestment}
              />
            </Form.Item> */}
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
