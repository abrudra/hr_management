import { Component } from "react";
import { signUpEmployee } from "../../../APIList";
import { Form, Input, Card, Alert, message, Modal, Button } from "antd";

class AddModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      isModalOpen: false,
    };
  }

  onFinish = async (values) => {
    console.log(values);
    try {
      await signUpEmployee(values);
      message.success("Employee created succesfully.");
      this.setState({
        isModalOpen: false,
      });
      setTimeout(() => {
        window.location.href = "/hr";
      }, "1000");
    } catch (error) {
      this.setState({
        error: error.response.data.message,
      });
    }
  };

  showModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  handleCancel = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { error } = this.state;
    return (
      <>
        <Button className="employee-add-empbutton" onClick={this.showModal}>
          Add new employee
        </Button>
        <Modal
          title="Add new employee"
          open={this.state.isModalOpen}
          footer={null}
          onCancel={this.handleCancel}
        >
          <>
            <div>
              <Form
                name="addEmployee"
                onFinish={this.onFinish}
                layout="vertical"
                label="Add Employee"
                initialValues={{ remember: true }}
                style={{ maxWidth: 550, margin: "0 auto" }}
              >
                <Card>
                  {error && <Alert description={error} type="error" showIcon />}
                  <Form.Item
                    label="Employee Name"
                    name="emp_name"
                    rules={[
                      { required: true, message: "Please input your name!" },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Employee Email"
                    name="emp_email"
                    rules={[
                      { required: true, message: "Please input your email!" },
                      {
                        type: "email",
                        message: "Please enter a valid email!",
                      },
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
                      {
                        required: true,
                        message: "Please input your address!",
                      },
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
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Button type="primary" htmlType="submit">
                    Add
                  </Button>
                </Card>
              </Form>
            </div>
          </>
        </Modal>
      </>
    );
  }
}

export default AddModel;
