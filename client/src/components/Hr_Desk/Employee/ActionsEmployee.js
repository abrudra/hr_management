import { Component } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Loading from "../../Loader/Loading";
import { Form, Input, Button, message, Card, Popconfirm, Modal,Alert } from "antd";
import {
  updateEmployeeByID,
  deleteEmployeeById,
  getEmployeeById,
} from "../../../APIList";

class ActionsEmployee extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
      isModalOpen: false,
      getIdError: "",
      employeeData: [],
      isLoading: false,
    };
  }

  handleId = (e) => {
    console.log(this.props.id);
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

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  onFinish = async (values) => {
    try {
      const id = this.props.id;
      const token = localStorage.getItem("token");
      await updateEmployeeByID(id, values, token);
      message.success("Newsletter updated successfully!");
      this.setState({
        isModalOpen: false,
      });
      setTimeout(() => {
        window.location.href = "/hr";
      }, "1000");
      this.formRef.current.resetFields();
    } catch (error) {
      this.setState({
        getIdError: error.response.data.message,
      });
    }
  };

  componentDidMount() {
    this.getEmployeeById();
  }

  getEmployeeById = async (id) => {
    try {
      const id = this.props.id;
      const token = localStorage.getItem("token");
      const data = await getEmployeeById(id, token);
      this.setState({
        employeeData: data,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        getIdError: error.response.data.message,
      });
    }
  };

  handleDelete = async () => {
    try {
      const id = this.props.id;
      const token = localStorage.getItem("token");
      const data = await deleteEmployeeById(id, token);
      this.setState({
        employeeData: data,
        isLoading: false,
        isModalOpen: false,
      });
      message.success("Newsletter deleted successfully!");
      setTimeout(() => {
        window.location.href = "/hr";
      }, "1000");
    } catch (error) {
      this.setState({
        getIdError: error.response.data.message,
      });
    }
  };

  render() {
    const { isLoading, getIdError, employeeData } = this.state;
    return (
      <>
        <Button
          icon={<EditOutlined />}
          type="primary"
          onClick={(e) => {
            this.handleId();
            this.showModal();
          }}
        >
          Edit
        </Button>
        <Modal
          title="Employee Update"
          open={this.state.isModalOpen}
          footer={null}
          onCancel={this.handleCancel}
        >
          <div>
            <Form
              ref={this.formRef}
              name="newsletterForm"
              onFinish={this.onFinish}
              layout="vertical"
            >
              <Card>
                {isLoading && <Loading />}
                {getIdError ? (
                  <Alert
                    description={getIdError}
                    type="error"
                    showIcon
                    style={{ marginBottom: 16 }}
                  />
                ) : (
                  employeeData.map((item) => (
                    <>
                      <Form.Item label="Employee Name" name="emp_name">
                        <Input defaultValue={item.emp_name} />
                      </Form.Item>

                      <Form.Item label="Employee Email" name="emp_email">
                        <Input defaultValue={item.emp_email} />
                      </Form.Item>

                      <Form.Item label="Employee Address" name="emp_address">
                        <Input.TextArea defaultValue={item.emp_address} />
                      </Form.Item>

                      <Form.Item label="Employee Contact" name="emp_contact">
                        <Input defaultValue={item.emp_contact} />
                      </Form.Item>
                      <Form.Item label="Employee PAN Card" name="emp_pancard">
                        <Input defaultValue={item.emp_pancard} />
                      </Form.Item>
                    </>
                  ))
                )}

                <Form.Item>
                  <div className="buttoncrud">
                    <Button
                      type="primary"
                      htmlType="submit"
                      icon={<EditOutlined />}
                    >
                      Update
                    </Button>
                    <Popconfirm
                      title="Are you sure you want to delete this News?"
                      onConfirm={this.handleDelete}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Button type="primary" icon={<DeleteOutlined />} danger>
                        Delete
                      </Button>
                    </Popconfirm>
                  </div>
                </Form.Item>
              </Card>
            </Form>
          </div>
        </Modal>
      </>
    );
  }
}

export default ActionsEmployee;
